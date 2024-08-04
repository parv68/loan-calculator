function calculateLoan(){
    loanAmountValue = document.querySelector('#loan-amount').value
    interestRateValue = document.querySelector('#interestRate').value
    monthsToPayValue = document.querySelector('#months-to-pay').value

    interset = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue
    monthlyPayment = (loanAmountValue / monthsToPayValue + interset).toFixed(2)
    document.querySelector('.payment').innerHTML =
    `Monthly Payment: ${monthlyPayment}`
}