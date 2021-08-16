
function updateValue(textId,inputId){
    const previousValue = parseFloat(document.getElementById(textId).innerText);
    const inputValue = parseFloat(document.getElementById(inputId).value);
    const updatedValue = previousValue + inputValue;
    return updatedValue;
}

function updateTotal(totalId,input){
    const previousTotal = parseFloat(document.getElementById('balance').innerText);
    if(totalId === 'deposit-amount'){
        const newTotal = previousTotal + input;
        return newTotal;
    }
    if(totalId === 'withdraw-amount'){
        const newTotal = previousTotal - input;
        return newTotal;
    }
}

document.getElementById('depositButton').addEventListener('click',function(){
    const input = parseFloat(document.getElementById('deposit-amount').value);
    if(input > 0){
        document.getElementById('deposit').innerText = updateValue('deposit','deposit-amount');
        document.getElementById('balance').innerText = updateTotal('deposit-amount',input);
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
        document.getElementById('withdraw').innerText = updateValue('withdraw','withdraw-amount');
        document.getElementById('balance').innerText = updateTotal('withdraw-amount',input);
        document.getElementById('withdraw-amount').value = '';
    }   
    else{
        window.alert('Invalid input.');
        document.getElementById('withdraw-amount').value = '';
    }
})