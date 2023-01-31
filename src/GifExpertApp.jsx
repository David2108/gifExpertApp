import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const addCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

    return (
        <>

            {/*Titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory onNewCategory={addCategory}/>

            {/*Listado de Gif*/}
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )

}