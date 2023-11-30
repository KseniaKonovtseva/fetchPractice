let xhr = new XMLHttpRequest();
let data

xhr.open("GET", 'db.json');

xhr.responseType = 'json';

xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      data = JSON.stringify(xhr.response)
      console.log(data);

      setTimeout(() => {
        let xhrPost = new XMLHttpRequest();
        xhrPost.open("POST", 'https://jsonplaceholder.typicode.com/posts');
        console.log(data);
        xhrPost.send(data);
      }, 2000)
    }
  }
}

// let xhrPost = new XMLHttpRequest();
// xhrPost.open("POST", 'https://jsonplaceholder.typicode.com/posts');
// xhrPost.send(data);
// console.log(data);
// xhrPost.upload.onprogress = function(event) {
//   alert(`Отправлено ${event.loaded} из ${event.total} байт`);
// };

// xhrPost.upload.onload = function() {
//   alert(`Данные успешно отправлены.`);
// };

// xhrPost.upload.onerror = function() {
//   alert(`Произошла ошибка во время отправки: ${xhrPost.status}`);
// };