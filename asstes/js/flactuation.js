
$.ajax({
    url:"https://api.exchangerate.host/fluctuation?start_date=2020-01-01&end_date=2021-01-04&base=ETB&places=5",
    type:"get",
    
    success:function(data){
        var rs = "";
        var c = 0;
        for(const r in data.rates){
           rs += "<tr>";
           c += 1 ;
           rs += "<td>"+c+"</td>";
           rs += "<td class='country-name'>"+r+"</td>";
           rs += "<td>"+data.rates[r].start_rate+"</td>";
           rs += "<td>"+data.rates[r].end_rate+"</td>";
           rs += "<td>"+data.rates[r].change+"</td>";
           rs += "<td>"+(data.rates[r].change_pct) * 100 + " %" +"</td>";
           
           rs += "</tr>";
        }
        
        document.getElementById("result").innerHTML = rs;
    }
    
})