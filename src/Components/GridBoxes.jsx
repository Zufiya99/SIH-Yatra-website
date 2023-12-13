import React from 'react';
import { useState, useEffect } from 'react';

const GridBoxes = () => {
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
        <>
            <div className="container text-center cards">
                <div className="row row-2">
                    <div className="col">
                        {quote}
                        {author}
                    </div>
                    <div className="col-md-2 col">
                        {quote}
                        {author}
                    </div>
                    <div className="col">
                        {quote}
                        {author}
                    </div>
                </div>
                <div className="row row-3">
                    <div className="col">
                        {quote}
                        {author}
                    </div>
                    <div className="col">
                        {quote}
                        {author}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GridBoxes;
