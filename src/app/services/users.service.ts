import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class UsersService {
    
    myShallowCopy;
    data: any = {};
    result: any = {
        auth_module: 
        {

        },
        content_module: 
        {

        }
    };

    authModules   : string[] = [];
    //authModules = new Array();
    contentModules: string[] = [];

    strAuthModules:string[];
    
    constructor( private http: HttpClient ) {
        console.log("Servicio listo para usar");

        // Do 20 GET request as numbers of json files
        for( let i = 0; i < 20; i++ ) {

            http.get(`../assets/data/u${ i }.json`)
            .subscribe( resp => {
                this.data = resp;
                                
                let auth = this.data.provider.auth_module;
                //console.log(auth);
                                
                auth = auth.replace('.', '_');

                if(!this.result.auth_module.hasOwnProperty(auth)) {                    
                    this.result.auth_module[auth] = new Array();                   
                    
                    this.authModules.push(auth);
                    
                }

                let content = this.data.provider.content_module;
                content = content.replace('.', '_');                
                                

                if(!this.result.content_module.hasOwnProperty(content)) {                    
                    this.result.content_module[content] = new Array();
                    this.contentModules.push(content);                    
                }
                
                let userNumber = this.data.name.split(' ')[1];
                
                this.result.auth_module[auth].push(`./u${userNumber}.json`);

                this.result.content_module[content].push(`./u${userNumber}.json`);

                
            })

            
        }

        
 
     } // End constructor

     



    getModuleNames(): string[] {        
        
         return Object.keys(this.result);
     }

    getAuthModules(): string[] {        
        
        return this.authModules;
    }

    getContentModules(): string[] {
        return this.contentModules;
    }

    getUsers(module: string, provider: string): string[] {        
        //console.log(this.result[module][provider]);
        
        return this.result[module][provider];
    }
}