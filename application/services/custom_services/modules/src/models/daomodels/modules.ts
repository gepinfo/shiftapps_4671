
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const modulesSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   data: { type: String }
})

const modulesModel = mongoose.model('modules', modulesSchema, 'modules');
export default modulesModel;
