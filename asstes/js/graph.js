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

