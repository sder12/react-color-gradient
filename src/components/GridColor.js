import React, { useEffect, useState } from 'react';
import SingleColor from './SingleColor';
import { LightenDarkenColor } from '../utils/helpers';


const GridColor = () => {
    //DATA
    const [color, setColor] = useState('#EE4266');
    const [shade, setShade] = useState(21);
    const [grid, setGrid] = useState({
        color: '#EE4266', shade: 21
    })
    const [arrayGrid, setArrayGrid] = useState([])

    //FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        if (color && shade) {
            setGrid({ color, shade })
        } else {
            alert('fill the form')
        }
    }

    const createGradient = (grid) => {
        let arr = [];
        for (let i = 0; i < grid.shade; i++) {
            arr[i] = {
                id: i,
                main: grid.color,
                colorgradient: '',
            }
        }
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
            arr[i].colorgradient = LightenDarkenColor(grid.color, num);
            num += 8;
        }
        setArrayGrid(arr)
    }


    useEffect(() => {
        createGradient(grid);
    }, [grid]);


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
                            title="Choose your color" value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                    {/* Number square */}
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="shade" type="number"
                                className="col-form-label">
                                Number of shade
                            </label>
                        </div>
                        <div className="col-auto">
                            <input id="shade" type="number" name="shade"
                                className="form-control form-control-sm"
                                value={shade} onChange={(e) => setShade(e.target.value)}></input>
                        </div>
                    </div>
                    {/* BTN */}
                    <div className='text-center'>
                        <button className="btn btn-outline-dark rounded ">GENERATE</button>
                    </div>
                </form>
            </div>

            {/* GRID */}
            <div className='row mt-2'>
                {
                    arrayGrid !== [] ?
                        arrayGrid.map((el) => <SingleColor key={el.id} {...el} />)
                        : ''
                }
            </div>
        </div>
    )
}

export default GridColor