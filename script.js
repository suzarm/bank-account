let balance = 100_000;
let originalPass = '3077';
let currency = 'USD';
const history =  [
  // {type: 'in', amount: 1000, date:new Date()},
  // {type: 'out', amount: 2000, date:new Date()},
  // {type: 'in', amount: 4000, date:new Date()},
  // {type: 'out', amount: 2000, date:new Date()},
];

function displayBalance(){
  let userPass = prompt('Enter the password');
  if (originalPass === userPass) {
    showBalance();
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
      history.push({ type: 'out', amount, date: new Date() });
      showBalance();
    } else {
      alert('Your purchase is  not successed');
    }
  } else {
    alert('The password is not correct');
  }
}

function addtopUp(){
  const amount = +prompt('How much do you want to topUp?');
  balance = amount +  balance;
  alert('Your topUp is successed');
  history.push({ type: 'in', amount, date: new Date() });
  showBalance();
}

function showBalance(){
  document.getElementById('display-text').innerHTML = balance + currency;
}

function showHistory(){
  if (history.length === 0){
    document.getElementById('history-display').innerHTML = 'No transactions';
  }else{
    document.getElementById('history-display').innerHTML = `<ul>
    ${history.map((elem) => {
      if (elem.type === 'in') {
        return `<li class="green"> + ${elem.amount} ${currency} ${formatDate(elem.date)}</li>`;
      } else {
        return `<li class="red"> - ${elem.amount} ${currency} ${formatDate(elem.date)}</li>`;      
      }
    }).join('')}
  </ul>`; 
  }

}


function formatDate(date) {
  // Get the hour, minute, and second components
  const hours = date.getHours().toString().padStart(2, '0'); // Ensure two digits with leading zero if necessary
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Concatenate the components to form the time string
  const time = `${hours}:${minutes}:${seconds}`;

  return time;
}




