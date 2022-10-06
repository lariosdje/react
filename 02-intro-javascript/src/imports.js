import {heroes} from './data/heroes.js';


const getHeroe = (id)=>{
    return heroes.filter(x=> x.owner === "DC");
}

const getHeroeById = (id)=>{
    return heroes.find(x=> x.id === id);
}

export {getHeroe, getHeroeById};
