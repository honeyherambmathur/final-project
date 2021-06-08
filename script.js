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
                 y=n;
                result = document.getElementById("result");
                if(p>0){
                            result.innerHTML = "If you deposit "+ p +" amount, "+" at interest rate of "+ r +" you will recive back " + (p*n*r/100) + " , "+" after "+y+" years";
                        }
                else
                {
                    alert("Enter positive number");
                }
            }
