import express, { application } from "express";

export class App{
    private app = application

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use('cors');
    }

    routes(){
        this.app.use('/');
    }

    settings(){
        this.app.set('port', process.env.PORT || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server running in port', this.app.get('port'));
    }



}

// Una variable de entorno es una variable que se encuentra en el sistema operativo.

// Middleware es una funcion que se ejecuta antes de que se ejecute una ruta, es decir, antes de que se ejecute una peticion http, basicamente 
// comunica el front con el back. 

//Los cors son un tipo de middleware que se encarga de permitir que se puedan hacer peticiones desde un servidor a otro, es decir, 
// que se puedan hacer peticiones desde un servidor a otro.


// Los strings en apiRest tienen una codificación que se llama JSON, que es un formato de intercambio de datos, es decir, es un formato que se utiliza para
// intercambiar datos entre el front y el back.

