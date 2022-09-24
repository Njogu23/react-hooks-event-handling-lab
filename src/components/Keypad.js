import React from 'react';

function Keypad (){

    function handleClick(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" name="password" onChange={handleClick}></input>
        </div>
    )
}

export default Keypad;