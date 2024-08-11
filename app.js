// listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // hide results 
    document.getElementById('results').style.display='none';
    // show loader
    document.getElementById('loading').style.display='block';

    setTimeout(calculateresults, 2000  );
    e.preventDefault();

});
// calculate results 
function calculateresults(){
console.log('calculating..');
// ui vars 
const  amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlypayment= document.getElementById('monthly-payment');
const totalpayment = document.getElementById('total-payment');
const totalinterest= document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedinterest = parseFloat(interest.value) / 100 / 12;
const calculatedpayment = parseFloat(years.value)*12;

// compute monthly payment 
const x = Math.pow(1  + calculatedinterest, calculatedpayment);
const monthly = (principal*x*calculatedinterest)/(x-1);

if(isFinite(monthly)){
    monthlypayment.value = monthly.toFixed(2);
    totalpayment.value = (monthly* calculatedpayment).toFixed(2);
    totalinterest.value = ((monthly*calculatedpayment)-principal)
    // show results 
    document.getElementById('results').style.display='block';

    // hide loader 
    document.getElementById('loading').style.display='none';
     
 
}else{
    showError('please check the number');
}
    // e.preventDefault();
}
// show error 
function showError(error){
    // show results 
    document.getElementById('results').style.display='none';

    // hide loader 
    document.getElementById('loading').style.display='none';
    // create div 
    const errorDiv= document.createElement('div');
    // get element 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // add class 
    errorDiv.className = 'alert alert-danger';
    // create text node and append to div 
    errorDiv.appendChild(document.createTextNode(error));
    // insert error above heading 
    card.insertBefore(errorDiv,heading);
    // clear erroe after 3 seconds 
    setTimeout(clearError, 3000);
}
// clear error 
function clearError(){
    document.querySelector('.alert').remove();
}