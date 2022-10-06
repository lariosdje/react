import { useState } from "react"
import { InputSearch } from './InputSearch'
import { GridGifs } from './GridGifs'

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    const addCategories = (category) => {

        if (categories.includes(category)) return;

        setCategories(categories.concat(category).reverse());
    };

    return (
        <>
            <h1>GifApp</h1>

            <InputSearch
                onNewCategory={addCategories}
            />

            {
                categories.map((x) => (
                    <GridGifs key={x} category={x} />
                ))
            }
        </>
    )
}
