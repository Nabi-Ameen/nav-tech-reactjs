import React from 'react'

const Button = ({ isFill }) => {

    return (
        <>

            {
                isFill ?
                    <button className="btn">Filled Button</button>
                    :
                    <button>Outline Button</button>
            }
        </>
    )
}

export default Button