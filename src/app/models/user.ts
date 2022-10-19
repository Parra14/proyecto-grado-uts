export class User {
    _id?:number;
    name: string;
    nameLast: string;
    email: string;
    password: string;


    constructor(name: string, nameLast: string, email: string, password: string){
        this.name = name;
        this.nameLast = nameLast;
        this.email = email;
        this.password = password;

    }

}