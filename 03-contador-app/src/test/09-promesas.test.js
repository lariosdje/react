import { getHeroeByIdAsync } from '../base-pruebas/09-promesas'

describe('Test 09 promesas', () => {

    test('Retornar un hero', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(x => {

                expect(x).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
                )
                done();
            });
    });

    test('Retornar un error si no existe', (done) => {

        const id = 100;

        getHeroeByIdAsync(id)
            .catch(x => {
                done();
            });
    })
})