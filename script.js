const handleSubmitForm = document.getElementById('handleSubmitForm');
const loanAmount = document.getElementById('LoanAmount')
const interestAmount = document.getElementById('interestAmount');
const yearsOfPay = document.getElementById('yearsOfPay');
const montlyAmount = document.getElementById('montlyAmount')
const totalAmount = document.getElementById('totalAmount');
const totalInterestValue = document.getElementById('totalInterest');
const myForm = document.getElementById('myForm');

function resetForm() {
    loanAmount.value = "";
    interestAmount.value="";
    yearsOfPay.value="";
}

function calculateLoan(loanAmount, interestAmount, yearsOfPay) {
    const monthlyRate = interestAmount / 12 / 100;
    const totalPayments = yearsOfPay * 12;
  
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
                (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
    const totalPayment = emi * totalPayments;
    const totalInterest = totalPayment - loanAmount;

    montlyAmount.value = emi.toFixed(2)
    totalAmount.value = totalPayment.toFixed(2)
    totalInterestValue.value = totalInterest.toFixed(2)
    console.log(`Monthly Payment (EMI): ₹${emi.toFixed(2)}`);
    console.log(`Total Payment: ₹${totalPayment.toFixed(2)}`);
    console.log(`Total Interest: ₹${totalInterest.toFixed(2)}`);

    resetForm()
  }

handleSubmitForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log("Calculating loan")

    const amount = parseFloat(loanAmount.value);
    const interest = parseFloat(interestAmount.value);
    const years = parseFloat(yearsOfPay.value);
    
    myForm.style.display = 'block';
    calculateLoan(amount, interest, years);


})