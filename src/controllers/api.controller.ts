import { Request, Response } from 'express';

export class ApiController{
    
    sayHello(req:Request, res:Response){
        try{
            const response = {
                status:200,
                message: 'Hello World'
            }
            res.status(200).json(response);
        }catch(err:any){
            console.log(err);

        }
    }   
}

// Para qué servía un @controller? Para que se pueda acceder a la clase desde cualquier parte del proyecto.