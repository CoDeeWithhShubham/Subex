import { Subject } from "rxjs";
import { User } from "../user.model";

export class UserServise{
    userchange = new Subject<User[]>();
    private user: User[] =[
        new User('shubham','kumar','happy@gmail.com','1995-02-01',7004616350,'patna'),
        new User('satyam','a','satyam@gmail.com',' 1996-08-02',8564789653,'bengaluru'),
        new User('maoo','ababli','babli@gmail.com',' 1996-08-01',11,'bagha'),
        new User('pallavi','aaaumar','pallavi@gmail.com','1991-08-02',365,'amritsher'),
      
    ]
    getusers(){
        return this.user.slice();
    }
    adduser(user:User){
        this.user.unshift(user) ;
        this.userchange.next(this.user.slice());
    }
    deleteuser(index: number){
        this.user.splice(index,1);
        this.userchange.next(this.user.slice());
    }
}