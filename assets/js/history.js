const disp = document.querySelector('.res')
const date = document.querySelector('.date')

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};


sendHttpRequest('GET', 'https://api.exchangerate.host/2020-04-04').then(responseData => {
  console.log(responseData);
  let output = '';
  let date_output = '';
  let rates = responseData.rates

  console.log(responseData.date)

  date_output = `Date: ${responseData.date}`;

  for (const p in rates) {
    output += ` <tr><td>${p} :</td> <td> ${rates[p]} </td></tr> `
  }
  disp.innerHTML = output;
  date.innerHTML = date_output;
});

