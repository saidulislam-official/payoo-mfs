// add money to the account
/* 
    step-1 : add event handler
    step-2 : prevent page reload after form submit
    step-3 : get money to be added to the account balance
    step-4 : get the pin number provided
    step-5 : verify the pin number 
    step-6 : get the current balance
    step-7 : add addMoneyInput with balance
    step-8 : update the balance in the UI/DOM

 */ 

document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
        // prevent page reload after form submit
        event.preventDefault();
        // console.log('money added button clicked');

        // get money to be added to the account
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        // get the pin number provided
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput); 

        // verify the pin number
        if(pinNumberInput === '666'){
            // console.log('adding money to your account');

            // get the current balance
            const balance = document.getElementById('account-balance').innerText;
            // console.log(balance);
            // add addMoneyInput with balance
            // const newBalance = balance + addMoneyInput;
            // console.log(newBalance);

            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance)
            // console.log(addMoneyNumber);
            // console.log(balanceNumber);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);
            
            // update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;


        }
        else{
            alert('Failed to add money! Please try again.');
        }


});