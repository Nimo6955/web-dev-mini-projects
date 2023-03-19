const amount = document.getElementById('amount')
const guests = document.getElementById('guests')
const quality = document.getElementById('quality')
const tipAmount = document.getElementById('tip-amount')

function calculate(){
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip <i class="fa-solid fa-indian-rupee-sign"></i> 0 each'
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip <i class="fa-solid fa-indian-rupee-sign"></i> ' + (Number(tip)*Number(guests.value)).toFixed(2) + ' total';
        showTipAmount();
    }
    amount.value = '';
    quality.value = '';
    guests.value = '';
}

function showTipAmount(){
    let a = tipAmount;
    a.className = 'show';
    setTimeout(function(){a.className = a.className.replace('show', '');}, 10000);
}

