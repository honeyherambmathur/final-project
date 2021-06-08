  function updaterate()
    {
        var rate = document.getElementById("rate").value;
        document.getElementById("rate_val").innerHTML=rate;
        
    }
            function calculate()
            {
                p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("r").value;
                result = document.getElementById("result");
                result.innerHTML = "The interest is " + (p*n*r/100);
            }
