import { baseModel } from "./baseModel";
export class ApiService<abc extends baseModel>{
    add(record:abc){
console.log("Record added")
    }
    mod(record:abc){
console.log("Records updated")
    }
    delte(record:abc){
console.log("Records deleted")
    }
}