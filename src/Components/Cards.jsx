import React from 'react';
import { useEffect, useState } from "react";

const Cards = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        //Random API of quotes to check the integration of API
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container text-center cards">
            <div className="row">
                <div className="col">
                    <p>{quote}</p>
                    <p>- {author}</p>
                </div>
                <div className="col">
                    <p>{quote}</p>
                    <p>- {author}</p>
                </div>
                <div className="col">
                    <p>{quote}</p>
                    <p>- {author}</p>
                </div>
                <div className="col">
                    <p>{quote}</p>
                    <p>- {author}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;

