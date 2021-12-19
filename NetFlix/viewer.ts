
import { ApiService } from "./ApiService";
import { baseModel } from "./baseModel";
import { INetflix } from "./iNetflix";
import {UserProfile} from "./Profile";

export class viewer extends baseModel
{
    name: string;
    pic: string;
    profile :  UserProfile
    viewpack : INetflix;
    add(){
        new ApiService<viewer>().add(new viewer());
    }
    mod(){

        new ApiService<viewer>().add(new viewer());
    }
    del(){

        new ApiService<viewer>().add(new viewer());
    }
    pack(){

        var pack=new this.pack();
        pack.body="This is my new pack";
        this.viewpack.Showpack();
    }
}