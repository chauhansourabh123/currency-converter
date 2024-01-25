import { useId } from "react";
import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId()
    return (
       
            
                <div className="bg-white mx-auto rounded-4 d-flex align-items-center justify-content-between p-4 my-2">
                    <div className="col-lg-3 col-md-3 d-flex flex-column align-items-start">
                        <label htmlFor={amountInputId} className="py-3 text-danger">{label}</label>
                        <input
                            id={amountInputId}
                            type="number"
                            placeholder="Amount"
                            className="border-0"
                            disabled={amountDisable}
                            value={amount}
                            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 d-flex flex-column align-items-center">
                        <p className="py-1 fs-6 text-danger">Currency Type</p>
                        <select
                            value={selectCurrency}
                            disabled={currencyDisable}
                            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            class="form bg-light border-0">

                            {currencyOption.map((currency) => (
                                <option
                                    key={currency}
                                    value={currency}>
                                    {currency}
                                </option>
                            ))}

                        </select>
                    </div>
                </div>
        
      
    );
}

export default InputBox;