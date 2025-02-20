import { App } from './app';

async function main () {
    const app = new App();
    await app.listen();
}

main();

//tsc transpila el codigo de typescript a javascript.

//transpilar es convertir el codigo de un lenguaje a otro, en este caso de typescript a javascript.