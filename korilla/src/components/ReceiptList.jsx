import ReceiptItem from "./ReceiptItem"

export default function RecieptList (props) {
    console.log(props)
    return (
        <div className="receipt-list">
            <h2>Hello</h2>

            <ul>
                {props.receipts.map((receipt) =>
                <ReceiptItem 
                key={receipt.id}
                id={receipt.id}
                receipt={receipt}
                />
                )}
            
            </ul>

        </div>
)
}