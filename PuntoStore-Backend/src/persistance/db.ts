import { AppDataSource } from "./config";
import { Product } from "./product";

export class Db {
    constructor(){}
    
    getProducts(){
        return AppDataSource.manager.find(Product);
    }
    
}