import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class UsersService {
    
    data: any = {};
    result: any = {
        'auth_module': 
        {

        },
        'content_module': 
        {

        }
    };
    
    constructor( private http: HttpClient ) {
        console.log("Servicio listo para usar");

        // hago las 20 peticiones get
        for( let i = 0; i < 20; i++ ) {

            http.get(`../assets/data/u${ i }.json`)
            .subscribe( resp => {
                this.data = resp;                
                let auth = this.data.provider.auth_module;
                if(!this.result.auth_module.hasOwnProperty(this.data.provider.auth_module)) {                    
                    this.result.auth_module[auth] = new Array();                    
                }

                let content = this.data.provider.content_module;
                if(!this.result.content_module.hasOwnProperty(this.data.provider.content_module)) {                    
                    this.result.content_module[content] = new Array();                    
                }
                
                let userNumber = this.data.name.split(' ')[1];                
                
                this.result.auth_module[auth].push(`./u${userNumber}.json`);
                this.result.content_module[content].push(`./u${userNumber}.json`);
            })
        }
        
        console.log(this.result);       

        
     }
    
}