import Mongoose, { Model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

interface IContract {
	address: string;
	name: string;
	symbol: string;
	decimals: number;
	uri: string;
	abis: Array<any>;
	type: string;
	types: Array<any>;
	contractCreator: string;
	deploymentTransactionHash: string;
	verifiedContract?: boolean;
	verifiedByTeam?: boolean;
	bytecode?: string;
	abi?: object;
	verifiedAt?: number;
	optimizationEnabled?: boolean;
	optimizationRuns?: number;
	compilerVersion?: string;
	files?: any;
}

const schema: Schema = new Schema<IContract, Model<IContract>>({
	address: { type: String },
	name: { type: String },
	symbol: { type: String },
	decimals: { type: Number },
	uri: { type: String, default: null },
	abis: [{ type: String }],
	type: { type: String },
	types: [{ type: String }],
	contractCreator: { type: String },
	deploymentTransactionHash: { type: String },
	verifiedContract: { type: Boolean, default: false },
	verifiedAt: { type: Number },
	verifiedByTeam: { type: Boolean, default: false },
	abi: { type: Object },
	bytecode: { type: String },
	optimizationEnabled: { type: Boolean },
	optimizationRuns: { type: Number },
	compilerVersion: { type: String },
	files: { type: Object },
});

schema.index({ address: 1 }, { unique: true });
schema.index({ abis: 1 });
schema.index({ address: 1, abis: 1 });
schema.set("autoIndex", true);

schema.plugin(mongoosePaginate);

export default Mongoose.models?.["Contractaddress"] ??
	Mongoose.model("Contractaddress", schema, "Contractaddresses");
