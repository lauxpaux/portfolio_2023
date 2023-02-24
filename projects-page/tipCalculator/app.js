

const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let billAmount = document.getElementById("bill_amount").value;
    
    let tipPercentage = document.getElementById("tip_percentage").value;

    let tipAmount = document.getElementById("tip_amount").value = (billAmount/100) * tipPercentage;


    let total = document.getElementById("total_bill").value = parseFloat(billAmount) + parseFloat(tipAmount);
    
    let split_by = document.getElementById("split_by").value; 

    let splitTotal = document.getElementById("split_total").value = parseFloat(total) / parseFloat(split_by);
    
 

})