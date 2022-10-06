import {getHeroeById, getHeroesByOwner} from '../base-pruebas/08-imp-exp'

describe('Test import export', ()=>{

    test('Test importa', ()=>{
        
        const idHeroe = 1;
        const heroe = getHeroeById(idHeroe);
      
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });

    test('Test Heroe por DC', ()=>{
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
            debugger
        expect(heroes.length).toEqual(3)
    });


})