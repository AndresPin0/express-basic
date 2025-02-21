"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
class ApiController {
    sayHello(req, res) {
        try {
            const response = {
                status: 200,
                message: 'Hello World'
            };
            res.status(200).json(response);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.ApiController = ApiController;
// Para qué servía un @controller? Para que se pueda acceder a la clase desde cualquier parte del proyecto.
