import React, { useState } from 'react';
import SingleColor from './SingleColor';

const GridColor = () => {
    //DATA
    const [color, setColor] = useState('#EE4266');
    //FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    //RETURN
    return (
        <div>
            {/* FORM */}
            <div className="bg-light py-4 px-4 d-flex justify-content-center">

                <form onSubmit={handleSubmit}>
                    {/* Color */}
                    <div className="d-flex gap-3 mb-3">
                        <label htmlFor="color" className="form-label">
                            Color picker:
                        </label>
                        <input id="color" type="color" name="color"
                            className="form-control form-control-color"
                            title="Choose your color" />
                    </div>
                    {/* Number square */}
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="number" type="number"
                                className="col-form-label">
                                Number of shade
                            </label>
                        </div>
                        <div className="col-auto">
                            <input id="number" type="number" name="number"
                                className="form-control form-control-sm" ></input>
                        </div>
                    </div>
                    {/* BTN */}
                    <div className='text-center'>
                        <button className="btn btn-outline-dark rounded ">GENERATE</button>
                    </div>
                </form>
            </div>

            {/* GRID */}
            <SingleColor />
        </div>
    )
}

export default GridColor