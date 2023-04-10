import React from 'react';

const SingleColor = (props) => {
    const copyHex = () => {
        alert(props.colorgradient)
    }

    return (
        <div className='col-4 col-colorHex'
            style={{
                backgroundColor: `${props.colorgradient}`
            }}>
            <h5 onClick={copyHex} >
                {props.colorgradient}
            </h5>
        </div >

    )
}

export default SingleColor