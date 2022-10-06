describe("pruebas de prueba", () => {

     test('Esta prueba no debe falla', () => {
          //1 inicializacion
          const msg = 'Hola Mundo';

          //2 estimulo
          const msg2 = msg.trim();

          //observar el comportamiento


          expect(msg).toBe(msg2);
     });
});