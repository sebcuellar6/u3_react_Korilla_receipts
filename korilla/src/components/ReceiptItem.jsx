import Person from "./Person"
import Order from "./Order"
import receipts from "../receipts"

export default function ReceiptItem (props) {
    console.log(props)
    return (
        <div className="receipt-item">
            <h2>Receipt:</h2>
            <Person person={props.receipt.person}/>
            <Order order={props.receipt.order}/>
        </div>
)
}