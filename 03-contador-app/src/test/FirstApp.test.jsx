import { render } from "@testing-library/react";
import { FirtsApp } from "../FirtsApp";

describe('Test Firs App', () => { 
    
    test('Test hacer match', () => { 

        const {container} = render(<FirtsApp valor="hola"/>) 

        expect(container).toMatchSnapshot();
     });


     test('Test mostrar titulo h1', () => { 
        const title = 'Hola soy lalo';

        const {container, getByText} = render(<FirtsApp valor= {title}/>) 

        expect(getByText(title)).toBeTruthy();
      })
})