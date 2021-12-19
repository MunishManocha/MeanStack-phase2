
import { INetflix } from "./iNetflix";
import {UserProfile} from "./Profile";

export class viewer
{
    id : number;
    name: string;
    pic: string;
    profile :  UserProfile
    viewpack : INetflix;
    pack(){

        var pack=new this.pack();
        pack.body="This is my new pack";
        this.viewpack.Showpack();
    }
}