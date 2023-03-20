import Mongoose, {
	type AggregatePaginateModel,
	type Document,
	type PaginateModel,
} from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoosePaginate from "mongoose-paginate-v2";

interface ITransactions extends Document {
	timestamp: number;
	to: string;
	from: string;
	contractAddress: string;
	transactionIndex: number;
	gasUsed: number;
	logsBloom: string;
	blockHash: string;
	transactionHash: string;
	logs: Array<object>;
	blockNumber: number;
	cumulativeGasUsed: number;
	effectiveGasPrice: number;
	status: number;
	byzantium: boolean;
	hash: string;
	type: number;
	accessList: string[];
	gasPrice: number;
	maxPriorityFeePerGas: number;
	maxFeePerGas: number;
	gasLimit: number;
	value: number;
	nonce: number;
	data: string;
	r: string;
	s: string;
	v: string;
	creates: string;
	raw: string;
	chainId: number;
	processed: boolean;
	parsed: boolean;
	parsedData: object;
	error?: string | undefined;
	parsedLogs?: object;
	firstSeen?: number | undefined;
}

const schema = new Mongoose.Schema({
	timestamp: { type: Number, default: null },
	to: { type: String },
	from: { type: String },
	contractAddress: { type: String },
	transactionIndex: { type: Number },
	gasUsed: { type: Number },
	logsBloom: { type: String },
	blockHash: { type: String },
	transactionHash: { type: String },
	logs: [{ type: Object }],
	blockNumber: { type: Number, ref: "Block" },
	cumulativeGasUsed: { type: Number },
	effectiveGasPrice: { type: Number },
	status: { type: Number },
	byzantium: { type: Boolean },
	hash: { type: String },
	type: { type: Number },
	accessList: [{ type: String }],
	gasPrice: { type: Number },
	maxPriorityFeePerGas: { type: Number },
	maxFeePerGas: { type: Number },
	gasLimit: { type: Number },
	value: { type: Number },
	nonce: { type: Number },
	data: { type: String },
	r: { type: String },
	s: { type: String },
	v: { type: Number },
	creates: { type: String },
	raw: { type: String },
	chainId: { type: Number },
	processed: { type: Boolean },
	parsed: { type: Boolean, default: false },
	parsedData: {
		name: { type: String },
		sighash: { type: String },
		signature: { type: String },
		args: { type: Object },
		inputs: { type: Object },
	},
	error: { type: String, default: null },
	parsedLogs: { type: Object },
	firstSeen: { type: Number, default: null },
});

schema.virtual("toContract", {
	ref: "Contractaddress",
	localField: "to",
	foreignField: "address",
	justOne: true,
});

schema.virtual("fromContract", {
	ref: "Contractaddress",
	localField: "from",
	foreignField: "address",
	justOne: true,
});

schema.virtual("parsedLogs.contractData", {
	ref: "Contractaddress",
	localField: "parsedLogs.address",
	foreignField: "address",
	justOne: true,
});

schema.index({ to: 1, from: 1 });
schema.index({ "parsedLogs.args.from": 1, "parsedLogs.args.to": 1 });
schema.index({
	"parsedLogs.name": 1,
	"parsedLogs.parsedFromAbi": 1,
	"parsedLogs.args.from": 1,
	"parsedLogs.args.to": 1,
});
schema.index({
	"parsedLogs.name": 1,
	"parsedLogs.parsedFromAbi": 1,
	"parsedLogs.args.from": 1,
	"parsedLogs.args.to": 1,
	"parsedLogs.address": 1,
});
schema.index({ transactionHash: 1 }, { unique: true });
schema.index({ transactionHash: 1, processed: 1 });
schema.index({ firstSeen: 1, blockNumber: 1 });
schema.index({ firstSeen: -1, blockNumber: -1 });

schema.set("autoIndex", true);

schema.plugin(mongoosePaginate);
schema.plugin(aggregatePaginate);

export default Mongoose.models?.["Transaction"] ??
	Mongoose.model<
		ITransactions,
		PaginateModel<ITransactions> & AggregatePaginateModel<ITransactions>
	>("Transaction", schema, "Transactions");
