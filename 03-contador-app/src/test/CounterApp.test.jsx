import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp"

describe('Test Counter App', () => { 
    
    test('Test Incrementa click', () => { 
        render(<CounterApp value={1}/>);

        fireEvent.click(screen.getByText('+1'));

        expect(screen.getByText('2')).toBeTruthy();
     })

     test('Test Decrementar click', () => { 
        render(<CounterApp value={1}/>);

        fireEvent.click(screen.getByRole('button', {name : 'btn-less'}));

        expect(screen.getByText('0')).toBeTruthy();
     })
 })