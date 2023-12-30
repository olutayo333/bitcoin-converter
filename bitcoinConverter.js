let initiated_interval; 
        function convert()
        {
            let coin = bitcoinInput.value //document.getElementById('bitcoinInput').value
            let endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json"

            fetch(endpoint).then((response)=>
            {
                response.json().then(data=>{
                    timeBox.innerHTML = data.time.updated;
                    usd.innerHTML = `${data.bpi.USD.symbol} ${(data.bpi.USD.rate_float * coin).toFixed(2)}`;
                    document.getElementById('eur').innerHTML = `${data.bpi.EUR.symbol} ${(data.bpi.EUR.rate_float * coin).toFixed(2)}`;
                    gpb.innerHTML=`${data.bpi.GBP.symbol} ${(data.bpi.GBP.rate_float*coin).toFixed(2)}`;
                })
            }) 
        }
        
        setInterval(convert, 2000)