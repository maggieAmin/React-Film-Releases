import React from "react";
import Film from "./Film";

const FilmList = ({filmsAsAProp}) => {
    const arrayOfJsxElements = filmsAsAProp.map((film) => {
        return (
            <li><Film nameAsAProp={film.name} urlAsAProp={film.url}/></li>
        )
        
    })
    console.log(arrayOfJsxElements)

    return(
        <>
        <ul>
            {arrayOfJsxElements}
        </ul>
        </>
    )
}

export default FilmList