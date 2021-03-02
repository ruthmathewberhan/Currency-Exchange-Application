const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');//returns an array [input0, input1]
const apiurl = "https://api.currencyfreaks.com/latest?apikey=52d3089a00c148b9a91b94f0c6297484";
let html = '';
async function currency() {
    const res = await fetch(apiurl);
    const data = await res.json();

    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;


    arrKeys.map(item => {
        return html += `<option value=${item}>${item}</option>`;
    });
    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = html;
    };
    function convert(i,j){
        input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
    }
    // console.log(rates[select[1].value])
    input[0].addEventListener('keyup', () =>convert(1,0))
       //if input0 is selected edit the value of input1
    input[1].addEventListener('keyup', () =>convert(0,1)) 
  
    select[0].addEventListener('change', ()=>convert(1,0))

    select[1].addEventListener('change', ()=>convert(0,1))
   
};

currency();