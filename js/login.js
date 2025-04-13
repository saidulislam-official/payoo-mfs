document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('login button clicked');

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        console.log(phoneNumber, pinNumber);

        if(phoneNumber === '123' && pinNumber === '666'){
            // console.log("your are login");
            window.location.href = '/home.html'
        }
        else{
            alert('Wrong phone or pin number');
        }
        
    })