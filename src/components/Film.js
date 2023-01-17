import React from "react";

const Film = ({nameAsAProp, urlAsAProp}) => {
    return (
        <>
        <a href="{urlAsAProp}">Name:{nameAsAProp}</a>
        </>
    )
}

export default Film