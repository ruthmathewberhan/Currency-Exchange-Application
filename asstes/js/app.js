const select = document.querySelectorAll('select');
        const input = document.querySelectorAll('input');
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
            // console.log(rates[select[1].value])
            input[0].addEventListener('keyup', () => {
                input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
            });
            input[1].addEventListener('keyup', () => {
                input[0].value = input[1].value;
            });
        };

        currency();