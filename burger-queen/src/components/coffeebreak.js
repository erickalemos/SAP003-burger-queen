import React, {
    useState
} from 'react';
import Menu from './menu';
import Button from './button';
import '../App.css';

//const [noteOrder, setNoteOrder] = useState([]);

const Coffeebreak = () => {
        const [order, setOrder] = useState([]);


        const addOrder = (item) => {
            setOrder([...order, item])

        }
        const total = order.reduce((accumulator, item) => accumulator + item.Price, 0);

        // deletar pedidos
        const deletOrder = (item) => {
            const indexItem = (order.indexOf(item));
            order.splice(indexItem, 1);
            setOrder([...order]);
        }

        const coffeeitems = Menu();
        return ( <>

            <div class = "button-coffee" > {
                coffeeitems.map((item) => item.breakfast === true ?
                    <
                    Button className = "bt bt-coffee"
                    Name = {
                        item.Name
                    }
                    Price = {
                        item.Price
                    }
                    onClick = {
                        addOrder
                    }
                    />:false


                )
            } <
            /div>  <
            div > {
                order.map(item =>
                    <
                    span > {
                        item.Name
                    } {
                        item.Price
                    } <
                    Button class = "btn-del"
                    title = '🗑'
                    onClick = {
                        deletOrder
                    } > < /Button> <
                    /span>)

                } < h2 > total: {
                    total
                } < /h2> <
                /div> <
                />
            )

        }

        export default Coffeebreak;