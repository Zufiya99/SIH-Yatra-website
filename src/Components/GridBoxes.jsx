import React from 'react';
import { useState, useEffect } from 'react';
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const GridBoxes = () => {
    const [quote, setQuote] = useState("");
    const [sales_revenue, setSales_revenue] = useState("");

    useEffect(() => {
        //Random API of quotes to check the integration of API
        fetch("src/Components/data.json")
            .then(response => response.json())
            .then(data => {
                setQuote(data.nri);
                setSales_revenue(data.sales_revenue);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className="container text-center cards">
                <div className="row row-2">
                    <div className="col">
                        <h5 className='data-head'>{quote}</h5>
                        <p className='data'>{sales_revenue}</p>
                    </div>
                    <div className="col-md-2 col">
                        {/* <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                />
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer> */}
                    </div>
                    <div className="col">

                    </div>
                </div>
                <div className="row row-3">
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </>
    );
};

export default GridBoxes;
