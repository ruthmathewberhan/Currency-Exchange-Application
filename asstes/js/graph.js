const xlabels = []; 
const ylabels = [];
chartIt();

async function chartIt(){
await getData();
var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'line',
data: {
labels: xlabels,
datasets: [{
    label: 'Worlds currency rate',
    data: ylabels,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
}]
}
});
}

async function getData() {
const apiurl = "https://api.currencyfreaks.com/latest?apikey=52d3089a00c148b9a91b94f0c6297484";

const res = await fetch(apiurl);
const data = await res.json();

const arrKeys = Object.keys(data.rates);
const rates = data.rates;

arrKeys.forEach(item => {
const row = item;
xlabels.push(row);
const column = rates[item];
ylabels.push(column);

});
}
getData();