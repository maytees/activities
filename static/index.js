const form = document.querySelector("form");

const baseUrl = 'http://localhost:7070';

let passEelement = document.getElementById('passphrase');
let nameElement = document.getElementById('name');

let passphrase = '';
let user = '';

passEelement.addEventListener('input', (e) => {
  passphrase = e.target.value;
});

nameElement.addEventListener('input', (e) => {
  user = e.target.value;
});

// Send a fetch request to vizard.matees.net/ 
fetch(baseUrl, {
  credentials: 'include' // Include cookies in the request,
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      // send passphrase over to the server via get req to baseUrl + /check, with name=user and pass=passphrase query params and store response json in a variable, the json given back is a boolean in json
      console.log(user, passphrase);
      fetch(baseUrl + '/check?name=' + user + '&pass=' + passphrase, {
        credentials: 'include'
      })
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          window.location.href = __uv$config.prefix + __uv$config.encodeUrl("https://outred.github.io");
        } else {
          alert('Sharing is not caring. if you know who owns the site, go to them and ask for it, not someone else');
        }
      });

      // window.location.href = __uv$config.prefix + __uv$config.encodeUrl("https://outred.github.io");
    });
});

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}
