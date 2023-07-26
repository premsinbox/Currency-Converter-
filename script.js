let box    = document.querySelectorAll(".currency")
let button = document.getElementById("btn")
let input  = document.getElementById("input")

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>display(res))

function display(res)
    {
        let curr = Object.entries(res)

        for(let i=0;i<curr.length;i++)
           {
                let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
                box[0].innerHTML+=opt
                box[1].innerHTML+=opt
           }
    }

button.addEventListener('click',()=>
        {
            let c1    = box[0].value 
            let c2    = box[1].value
            let value = input.value

            if(c1===c2)
            {
                alert("CURRENCIES ARE SAME...")
            }
            else
            {
                convert(c1,c2,value)
            }

        })

function convert(c1,c2,value)
{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${value}&from=${c1}&to=${c2}`)
    .then(resp => resp.json())
    .then((data) => {
    document.getElementById("result").value=Object.values(data.rates)[0]
    });
}