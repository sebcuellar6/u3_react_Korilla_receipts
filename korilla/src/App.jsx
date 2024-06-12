import RecieptItem from './components/ReceiptItem'
import RecieptList from './components/ReceiptList'
import receipts from './receipts'
import './App.css'



export default function App() {
  

  return (
    <RecieptList receipts={receipts}/>
  )
}

