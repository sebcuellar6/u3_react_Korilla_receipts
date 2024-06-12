import Toppings from './Toppings'

export default function Order (props) {

    if (props.order.toppings)
    return (
        <div className="order">
            <h2>Order: {props.order.main}</h2>
            <ul>
                <li>{props.order.protein}</li>
                <li>{props.order.rice}</li>
                <li>{props.order.sauce}</li>
                <li>{props.order.toppings}</li>
                <li>{props.order.drink}</li>
                <li>{props.order.cost}</li>
                <ul/>
                <ul>
                {(props.order.toppings) ? (props.order.toppings.map((topping, index) => {
                
                <Topping 
                key = {index}
                id = {index}
                topping={topping}
                />
                    }
                )) : null
            }
                </ul>
            </ul>
        </div>
)
}