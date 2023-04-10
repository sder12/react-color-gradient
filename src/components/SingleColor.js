import React from 'react';

const SingleColor = (props) => {
    return (
        <div className='col-4 col-colorHex'
            style={{
                backgroundColor: `${props.colorgradient}`
            }}>
            {props.colorgradient}
        </div >

    )
}

export default SingleColor