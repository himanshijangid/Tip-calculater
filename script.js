const amount = document.getElementById('amount');
const guest = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

calculate = () => {
    const tip= ((amount.value*quality.value)/guest.value);
    amount.value = "";
    guest.value = "";
    quality.value = "";
    if(tip=== 'NaN'){
        tipAmount.innerHTML='please insert a number';
        showTipAmount();

    }else{
        tipAmount.innerHTML= 'tip &#8377;'+ tip + 'each';
        showTipAmount();
    }

    }
    showTipAmount = () => {
    tipAmount.className = "show";
    setTimeout(function(){
        tipAmount.className= tipAmount.className.replace('show', "");
    }, 6000);
            

    }


