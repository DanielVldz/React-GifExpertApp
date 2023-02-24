import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Pruebas en el GifItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
        screen.debug();
     })
     
 })