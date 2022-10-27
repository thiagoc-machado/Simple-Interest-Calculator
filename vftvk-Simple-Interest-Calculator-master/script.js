function compute() {
		
   
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;

    var positive = parseInt(principal) > 0;
    if (!positive) {
        alert("Enter a positive number");
        document.getElementById("principal").focus()
        document.getElementById("principal").value = 0;
    }
    

    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";
}


function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

  function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
  
 