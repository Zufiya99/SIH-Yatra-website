import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Visuals = () => {
    const data = [
        { name: "Facebook", value: 120 },
        { name: "Instagram", value: 220 },
        { name: "Telegram", value: 320 },
    ];
    return (
        <>
            <div className="visuals">
                <ResponsiveContainer width="100%" height={400}>
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
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={400}>
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
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={400}>
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
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Visuals;
// import React, { useEffect, useState } from 'react';
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// const Visuals = () => {
//     const [quote, setQuote] = useState("");
//     const [author, setAuthor] = useState("");

//     useEffect(() => {
//         fetch("https://api.quotable.io/random")
//             .then(response => response.json())
//             .then(data => {
//                 setQuote(data.content);
//                 setAuthor(data.author);
//             })
//             .catch(error => console.log(error));
//     }, []);

//     const data = [
//         { name: "Facebook", value: 120 },
//         { name: "Instagram", value: 220 },
//         { name: "Telegram", value: 320 },
//     ];

//     return (
//         <div className="container text-center cards">
//             <div className="row">
//                 <div className="row">
//                     <div className="col">
//                         <h5 className='data-head'>Destination visited</h5>
//                         <p className='data'>678</p>
//                     </div>
//                     <div className="col">
//                         <h5 className='data-head'>Destination visited</h5>
//                         <p className='data'>678</p>
//                     </div>
//                     <div className="col">
//                         <h5 className='data-head'>Destination visited</h5>
//                         <p className='data'>678</p>
//                     </div>
//                     <div className="col">
//                         <h5 className='data-head'>Destination visited</h5>
//                         <p className='data'>678</p>
//                         <ResponsiveContainer width="100%" height={400}>
//                             <PieChart>
//                                 <Pie
//                                     dataKey="value"
//                                     isAnimationActive={false}
//                                     data={data}
//                                     cx="50%"
//                                     cy="50%"
//                                     outerRadius={80}
//                                     fill="#8884d8"
//                                     label
//                                 />
//                                 <Tooltip />
//                                 <Legend />
//                             </PieChart>
//                         </ResponsiveContainer>

//                     </div>
//                 </div>
//             </div>
//             {/* <ResponsiveContainer width="100%" height={400}>
//                 <PieChart>
//                     <Pie
//                         dataKey="value"
//                         isAnimationActive={false}
//                         data={data}
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={80}
//                         fill="#8884d8"
//                         label
//                     />
//                     <Tooltip />
//                     <Legend />
//                 </PieChart>
//             </ResponsiveContainer> */}

//         </div>
//     );
// };

// export default Visuals;
