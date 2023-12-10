import React from 'react';

const GridBoxes = () => {
    return (
        <>
            <div className="container text-center cards">
                <div className="row row-2">
                    <div className="col">
                        Column
                    </div>
                    <div className="col-md-2 col">
                        Column
                    </div>
                    <div className="col">
                        Column
                    </div>
                </div>
                <div className="row row-3">
                    <div className="col">
                        Column
                    </div>
                    <div className="col">
                        Column
                    </div>
                </div>
            </div>
        </>
    );
};

export default GridBoxes;
