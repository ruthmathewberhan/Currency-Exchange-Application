
$.ajax({
    url:"https://api.exchangerate.host/fluctuation?start_date=2020-01-01&end_date=2020-01-04&base=ETB",
    type:"get",
    
    success:function(data){
        var rs = "";
        var c = 0;
        for(const r in data.rates){
           console.log(r)
    }
    }
    
})