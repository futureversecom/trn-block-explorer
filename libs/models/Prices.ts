import Mongoose, { Document } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

interface IPrice extends Document {
	name: string;
	price: number;
}

const schema = new Mongoose.Schema<IPrice>({
	name: { type: String },
	price: { type: Number },
});

schema.index({ name: 1 }, { unique: true });
schema.set("autoIndex", true);

schema.plugin(mongoosePaginate);

export default Mongoose.models?.["Price"] ??
	Mongoose.model<IPrice>("Price", schema, "Prices");
