const url = "https://api.metalpriceapi.com/v1/latest";
const apiKey = "9bfff2c9297140d96fec88205e4c83ff";
const base = "USD";
const yourOption = document.querySelector("#option");
const paragraf = document.querySelector("#write");

const logo = document.querySelector("#logo");
const About = document.querySelector("#about");
const calculate = document.querySelector("#calculate");

logo.addEventListener("click", () => {
  alert("logo key is not touchable");
});
About.addEventListener("click", () => {
  alert("About key is not touchable");
});
calculate.addEventListener("click", () => {
  alert(
    "IT DOES NOT WORK: I'm sorry, but I've hit my API limit and can't process your request at the moment. Please try again later when the limit resets. Also, there are some bugs on the website that haven't been fixed yet, so some features may not work properly. I'm doing my best to fix these issues, but they may still cause problems in the meantime. Thanks for your understanding and patience."
  );
});

fetch(`${url}?api_key=${apiKey}&base=${base}&currencies=${yourOption.value}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP error: ${response.status}`);
    }
  })
  .then((data) => {
    paragraf.innerHTML = `1 ${base} is ${data.rates[yourOption.value]} ${
      yourOption.value
    } right now. `;
  })
  .catch((error) => console.error(error));

//   https://api.metalpriceapi.com/v1/latest
//   ?api_key=df995261f46c758ae88e47465f9820c2
//   &base=USD
//   &currencies=EUR,XAU,XAG
// IF IT DOES NOT WORK: <br />
//         I'm sorry, but I've hit my API limit and can't process your request at
//         the moment. Please try again later when the limit resets. Also, there
//         are some bugs on the website that haven't been fixed yet, so some
//         features may not work properly. I'm doing my best to fix these issues,
//         but they may still cause problems in the meantime. Thanks for your
//         understanding and patience.
