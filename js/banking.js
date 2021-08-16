function getInputValue(inputId){
    const value = parseFloat(document.getElementById(inputId).value);
    return value;
}

function updateValue(textId){
    const getValue = parseFloat(document.getElementById(textId).innerText);
    return getValue;
}

function updateTotal(totalId){
    const previousTotal = parseFloat(document.getElementById('balance').innerText);
    if(totalId === 'deposit-amount'){
        const newTotal = previousTotal + getInputValue(totalId);
        return newTotal;
    }
    if(totalId === 'withdraw-amount'){
        const newTotal = previousTotal - getInputValue(totalId);
        return newTotal;
    }
}

document.getElementById('depositButton').addEventListener('click',function(){
    if(getInputValue('deposit-amount') < 0){
        window.alert('You cannot deposit a nagetive amount of money.');
        document.getElementById('deposit-amount').value = '';
    }else{
        document.getElementById('deposit').innerText = getInputValue('deposit-amount') + updateValue('deposit');
        document.getElementById('balance').innerText = updateTotal('deposit-amount');
        document.getElementById('deposit-amount').value = '';
    }

})

document.getElementById('withdrawButton').addEventListener('click',function(){
    if(getInputValue('withdraw-amount') < 0){
        window.alert('You cannot withdraw a nagetive amount of money.');
        document.getElementById('withdraw-amount').value = '';
    }else if(updateTotal('withdraw-amount') < getInputValue('withdraw-amount')){
        window.alert("Insufficient balance.");
        document.getElementById('withdraw-amount').value = '';
    }
    else{
        document.getElementById('withdraw').innerText = getInputValue('withdraw-amount') + updateValue('withdraw');
        document.getElementById('balance').innerText = updateTotal('withdraw-amount');
        document.getElementById('withdraw-amount').value = '';
    }

})