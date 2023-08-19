const spanE1 = document.querySelector('.box span');
function generateOTP(){
    let digit = '0123456789';
    let OTP = '';

    for(let i = 0 ; i < 4 ; i++)
    {
        OTP += digit[Math.floor(Math.random() * 10)];
    }
    spanE1.innerHTML = OTP;
}