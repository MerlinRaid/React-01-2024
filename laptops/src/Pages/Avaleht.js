import React from 'react';

function Avaleht() {
    const computers = (JSON.parse(localStorage.getItem("laptops")) || []);

    const addToCart = (clickedComputer) => {
        const cart = JSON.parse(localStorage.getItem("cartlaptops")) || [];
        cart.push(clickedComputer);
        localStorage.setItem("cartlaptops", JSON.stringify(cart));
    }

    return (
        <div className="avaleht-text">
            <div>Tere</div> 
            <div>Siin lehel saad sülearvuteid vaadata</div>
            <br /><br />
            {computers.map(oneComputer =>
                <div key={oneComputer.id}>
                    <div>Mark: {oneComputer.mark}</div>
                    <div>Mudel: {oneComputer.mudel}</div>
                    <div>Maksumus: {oneComputer.maksumus}€</div>
                    <button onClick={() => addToCart(oneComputer)}>Lisa ostukorvi</button>
                    <br /><br />
                </div>
            )}
        </div>
    )
}

export default Avaleht;