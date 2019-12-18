import React, {Component} from 'react';
import Menu from '../pages/waiter'
import Button from './button'

const coffeebreak = () => {
    const coffeeitems = Menu()
    return (
        <>
            coffeeitems.map(
                (item)=> item.breakfast === true?
                <button>
                    {Item.name}
                </button>)
        </>
    )

}

export default coffeebreak;