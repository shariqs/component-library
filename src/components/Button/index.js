import React from 'react';

const Button = () => {
    return (
        <div onClick={() => console.log("click")}>This is a button</div>
    );
}

export default Button;