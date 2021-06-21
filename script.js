function compute() {
    
    var principal = document.getElementById("principal").value;
    /* Validate that a positive number is given by user */
        if (principal <= 0) {
            alert("Enter a positive number");
            document.getElementById("principal").focus();   
        } else {
            var rate = document.getElementById("rate").value;
            var years = document.getElementById("years").value;
            /* Calculate Interest */
            var interest = principal * years * rate /100;
            /* Convert Num of Years into actual Year */
            var year = new Date().getFullYear()+parseInt(years); 
            /* Display Results */
            document.getElementById("result").innerHTML=
            "<p>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\></p>";       
        }
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    /* Change Rate Value when moving Slider */
    document.getElementById("rate_val").innerText=rateval;
}      
