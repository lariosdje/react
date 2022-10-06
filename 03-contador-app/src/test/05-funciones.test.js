import {getUser, getUsuarioActivo} from '../base-pruebas/05-funciones';

describe('Test 05 funciones', ()=>{

    test('Test getUser', ()=>{
        const obj = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const result = getUser();

        expect(obj).toStrictEqual(result);
    });


    test('Test GetActiveUser', ()=>{
        const name = "Eduardo";

        const obj = {
            uid: 'ABC567',
            username : name
        }

        const result = getUsuarioActivo(name);

        expect(obj).toStrictEqual(result);
    

    });
});