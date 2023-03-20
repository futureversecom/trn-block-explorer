import Mongoose from "mongoose";

import { ROOT_NETWORK } from "@/libs/constants";
import "@/libs/models";

let mongoInstance: typeof Mongoose;
export const getMongoInstance = async () => {
	if (mongoInstance) return mongoInstance;
	return await Mongoose.connect(ROOT_NETWORK.MongoUri);
};
