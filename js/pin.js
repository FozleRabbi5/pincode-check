document.getElementById('pin-generate-btn').addEventListener('click',function(){
    const pinCode = Math.floor(Math.random()*10000);
    const pinCodeStr = pinCode + '';
    if (pinCodeStr.length === 4){

        document.getElementById('pin-show').value = pinCode;
    }
})
document.getElementById('calculator').addEventListener('click', function(event){
    const digits = event.target.innerText;

    if (!isNaN(digits)){
        const preDigit = document.getElementById('input-digit-show').value;
        const newDigit = preDigit + digits;
        document.getElementById('input-digit-show').value = newDigit;
    }
    
    document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('input-digit-show').value = '';
    })
})
document.getElementById('clear-last-digit').addEventListener('click',function(){
     const getDigit = document.getElementById('input-digit-show').value;
     const getSplitDigit = getDigit.split("");
     getSplitDigit.pop()
     const getDigitP = getSplitDigit.join("");
     document.getElementById('input-digit-show').value = getDigitP;
})

document.getElementById('submit-btn-typed').addEventListener('click', function(){
    const pinValue = document.getElementById('pin-show').value;
    const typedValue = document.getElementById('input-digit-show').value;
    const pinSuccess = document.getElementById('matched-pin');
    const pinUnsuccess =document.getElementById('unmatched-pin');
    if ( pinValue === typedValue){
        pinSuccess.style.display ="block";
        pinUnsuccess.style.display ="none";
    }
    else
    {
        
        pinUnsuccess.style.display ="block";
        pinSuccess.style.display ="none";
    }
    // document.getElementById('pin-show').value = '';
    document.getElementById('input-digit-show').value = '';
})