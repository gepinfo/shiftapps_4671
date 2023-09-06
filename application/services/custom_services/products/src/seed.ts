import * as mongoose from 'mongoose';
import { productsSchema } from './models/daomodels/products';

const productsModel = mongoose.model('products', productsSchema);

export class Seed {

    constructor() {

    }

    

}
