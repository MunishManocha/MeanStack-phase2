import { ApiService } from "./ApiService";
import { baseModel } from "./baseModel";

export class UserProfile extends baseModel{
     Mobileno: number;
    subscription: string;
    Packvalidity: string;
    address: string;
    add()
    {
        new ApiService<UserProfile>().add(new UserProfile());
    }
    mod(){

        new ApiService<UserProfile>().add(new UserProfile());
    }
    del(){

        new ApiService<UserProfile>().add(new UserProfile());
    }
}