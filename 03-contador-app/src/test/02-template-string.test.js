import {getSaludo} from '../base-pruebas/02-template-string';

describe('Test template string', ()=>{
    
    test('Obtiene Saludo', ()=>{
        const name = 'Eduardo';
        const func = getSaludo(name);

        expect(func).toBe(`Hola ${name}`); 

    })
});