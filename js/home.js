// add money to the account
/* 
    step-1 : add event handler
    step-2 : prevent page reload after form submit
    step-3 : get money to be added to the account balance
    step-4 : get the pin number provided
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


});