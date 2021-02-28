const ul = document.querySelector("#rates");
const apiurl = "https://api.currencyfreaks.com/latest?apikey=52d3089a00c148b9a91b94f0c6297484";
let html = '';
async function currency() {
    const res = await fetch(apiurl);
    const data = await res.json();

    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;

    // console.log(data);
    arrKeys.map(item => {
        return (html += `<li>${item} : ${rates[item]}</li>`);
    });
    ul.innerHTML=html;
    // console.log(html);
};

currency();