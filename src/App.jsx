import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-12 p-3 bg-secondary bg-opacity-75 mx-auto rounded-2 mt-4 text-center'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount)=> setAmount(amount)}
            />

            <button type="button" className="btn btn-primary fw-bold" onClick={swap}>Swap</button>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
            />

            <div class="d-grid gap-2 mt-4">
              <button class="btn btn-primary py-3 fs-5 fw-bold" type="submit">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
