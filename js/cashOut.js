// cash out money


document.getElementById('btn-cash-out-money')
    .addEventListener('click', function(event){
        event.preventDefault();


        const cashOutMoney = document.getElementById('cash-out-money').value;
        const totalCashOut = parseFloat(cashOutMoney);
        const accountBalance = document.getElementById('account-balance').innerText;
        const totalAccountBalance = parseFloat(accountBalance);

        const pinNumberInput = document.getElementById('cash-out-pin-number').value;
       
       if(pinNumberInput === '666'){
            const newAccountBalance = totalAccountBalance - totalCashOut;
            document.getElementById('account-balance').innerText = newAccountBalance;
        }
        else{
           alert('Failed to add money! Please try again.');
        }

    });