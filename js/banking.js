
function updateValue(textId,inputId,input){
    const previousValue = parseFloat(document.getElementById(textId).innerText);
    const inputValue = parseFloat(document.getElementById(inputId).value);
    const updatedValue = previousValue + inputValue;

    const previousTotal = parseFloat(document.getElementById('balance').innerText);
    if(inputId === 'deposit-amount'){
        document.getElementById('balance').innerText = previousTotal + input;
    }
    if(inputId === 'withdraw-amount'){
        document.getElementById('balance').innerText = previousTotal - input;
    }
    return updatedValue;
}

document.getElementById('depositButton').addEventListener('click',function(){
    const input = parseFloat(document.getElementById('deposit-amount').value);
    if(input > 0){
        document.getElementById('deposit').innerText = updateValue('deposit','deposit-amount',input);
        document.getElementById('deposit-amount').value = '';
    }
    else{
        window.alert('Invalid input.');
        document.getElementById('deposit-amount').value = '';
    }
})

document.getElementById('withdrawButton').addEventListener('click',function(){
    const input = parseFloat(document.getElementById('withdraw-amount').value);
    const previousTotal = parseFloat(document.getElementById('balance').innerText);
    if(previousTotal < input){
        window.alert("Insufficient balance.");
        document.getElementById('withdraw-amount').value = '';
    }
    else if(input > 0){
        document.getElementById('withdraw').innerText = updateValue('withdraw','withdraw-amount',input);
        document.getElementById('withdraw-amount').value = '';
    }   
    else{
        window.alert('Invalid input.');
        document.getElementById('withdraw-amount').value = '';
    }
})