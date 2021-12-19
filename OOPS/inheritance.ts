import { Employee } from "./employe";
import { IDeveloper } from "./IDeveloper";

class develop extends Employee  implements IDeveloper
{
    projectName: string;
    constructor(_name,_dept,_id,_projectName)
    {
        super(_name,_dept,_id);
        this.projectName=_projectName;
    }
    writeCode()
    {
        console.log("Writing Code");
    }
    PrintProjectName()
    {
        console.log("Hi All"+this.projectName);
    }
}
var dev=new develop("manocha","bank",2,"ICICI BANK");
dev.print();
dev.writeCode();
dev.PrintProjectName();