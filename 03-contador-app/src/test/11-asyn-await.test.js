import { getImagen } from "../base-pruebas/11-async-await";

describe('Test async await 11', () => {

    test('regresa url giph', async () => {

        const url = await getImagen();

        console.log(url);
        expect(typeof url).toBe('string');
    })
});