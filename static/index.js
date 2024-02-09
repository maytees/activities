const form = document.querySelector("form");
const input = document.querySelector("input");
let verified = true;

// Thanks, codebubb
const sha256script = document.createElement("script");
sha256script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js";

document.head.appendChild(sha256script);

function getCookie(name) {
  var match = document.cookie.match(RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  return match ? match[1] : false;
}

form.addEventListener("submit", async (event) => {
if(!verified) {alert("Put in the password dum dum");return};
  event.preventDefault();
  window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {

      window.location.href = __uv$config.prefix + __uv$config.encodeUrl("https://outred.github.io");
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

// let verified = false;

// async function getPass() {
// console.log("getPass()")
//  // return "d979885447a413abb6d606a5d0f45c3b7809e6fde2c83f0df3426f1fc9bfed97";
//   // return await fetch("https://dashboard.matees.net/proxy/password/");
// }

// let password_hash;
// let pass;
//     while (!verified || pass == null) {
// console.log("asdf")
//       if (getCookie("verified") == "yes") {
//         verified = true;
//         break;
//       }

//       pass = prompt("What is the password?");

//       //let input_hash = sha256(pass);

//       if (pass === "andrew") {
//         verified = true;
//         document.cookie = "verified=yes; expires=Tue, 19 Jan 2038 04:14:07 GMT";
//       } else {
//         console.log("Wrong hash");
//       }
//     }

// getPass().then((res) => { console.log("then")
//   res.text().then((text) => {
// 	console.log(text);
//     password_hash = text;

//   });
// });
