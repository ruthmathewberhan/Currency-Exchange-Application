const ul = document.querySelector("#rates");
const filter = document.querySelector(
    'body > div.ui.top.attached.tabular.menu > div > div > div > input[type=text]'
);

const apiurl = "https://api.currencyfreaks.com/latest?apikey=52d3089a00c148b9a91b94f0c6297484";
let html = '';
async function currency() {
    const res = await fetch(apiurl);
    const data = await res.json();

    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;

    // console.log(data);
    arrKeys.map(item => {
        return (html += `<li class='i'>${item} : ${rates[item]}</li>`);
    });
    ul.innerHTML=html;
    // console.log(html);
};

currency();

filter.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase();
    // console.log(searchInput);

    const items = document.getElementsByClassName('i');
    Array.from(items).forEach((item) => {
        if (!item.textContent.toLowerCase().startsWith(searchInput)) {
            item.classList.add('hide');
        } else {
            item.classList.remove('hide');
        }
    });
});