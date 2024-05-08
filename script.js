let balance = 100_000;
let originalPass = '3077';
let currency = 'USD';

function showBalance(){
  let userPass = prompt('Enter the password');
  if (originalPass === userPass) {
    document.getElementById('display-text').innerHTML = balance;
  } else {
    alert('The password is not correct');
  }
}

function showWithdraw(){
  let userPass= prompt('Enter the password');
  if (originalPass === userPass) {
    const amount = prompt('How much do you want to withdraw?')
    if (amount <= balance) {
      balance = balance - amount;
      alert('Your purchase is successed');
      document.getElementById('display-text').innerHTML = balance;
    } else {
      alert('Your purchase is  not successed');
    }
  } else {
    alert('The password is not correct');
  }
  
}


function addtopUp(){
  const amount = +prompt('How much do you want to topUp?');
  balance = amount + balance;
  alert('Your topUp is successed');
  document.getElementById('display-text').innerHTML = balance;
}