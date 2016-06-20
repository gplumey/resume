
export class CommonMail {
    email:string;
    compony:string;
    city:string;
    message:string;

    constructor(msg: string, email:string) {
        this.message = msg;
        this.email = email;
    }
}

