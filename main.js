let userData

const getData = () => {
  fetch('db.json')
  .then(response => response.json())
  .then(data => {console.log(data); sendData(JSON.stringify(data)).then((data) => console.log(data));})
  .catch(error => {console.log(error);})
}

const sendData = (data) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
}

getData()
