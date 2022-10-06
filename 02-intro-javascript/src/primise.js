import { getHeroe, getHeroeById } from './imports.js'

const buscaHeroe = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(30);

            if (heroe != undefined) {
                return resolve(heroe);
            }
            reject("No hay datos");

        }, 2000);
    });
}; 



buscaHeroe(1).then((res) => {
    console.log(res);
}).catch((ex) => {
    console.warn(`error`, ex);
})