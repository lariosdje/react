
import {retornaArreglo} from '../base-pruebas/07-deses-arr'

describe('Test 07 arreglos', ()=>{

    test('Test Regresa string y numero', ()=>{
        
        const [letter, numbers] = retornaArreglo();

        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');
    });
}); 