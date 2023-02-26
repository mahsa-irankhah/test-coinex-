let marketList = [
  "BTC/USDT",
  "APE/USDT",
  "ETH/USDT",
  "ALGO/USDT",
  "CHZ/USDT",
  "APE/USDT",
  "BNB/USDT",
  "DOGE/USDT",
  "NEAR/USDT",
  "ETC/USDT",
  "ROSE/USDT",
  "APE/USDT",
  "XTZ/USDT",
  "FIL/USDT",
  "ADA/USDT",
  "DYDX/USDT",
  "AAVE/USDT",
  "OGN/USDT",
  "APE/USDT",
  "OP/USDT"
];



let marketTable = document.getElementById("market_table");
let executionTable = document.getElementById("execution_table");
let changeDown = document.getElementById("change_down_table");
let changeUp = document.getElementById("change_up_table");
let downBars = document.getElementById("down_bars");
let upBars = document.getElementById("up_bars");

const randomNumber = Math.random()*100;

let className = "down_text"; 

  if (randomNumber>50) {
     className = "up_text"
  }

marketList.forEach(item => {

  const randomNumber = Math.random() * 100;

  let className = "down_text";

  if (randomNumber > 50) {
    className = "up_text";
  }

  

    marketTable.insertAdjacentHTML(
      "beforeend",
      `
          <tr>
            <td class="normal_color"> <img src="./src/images/icons/star.png"/> ${item}</td>
            <td class=${className}>24,593.64</td>
            <td class=${className}>0.77 %</td>
          </tr>
    `
    );

})

for(let i=0; i<12; i++ ) {

  const randomNumber = Math.random() * 100;

  let className = "down_text";

  if (randomNumber > 50) {
    className = "up_text";
  }

  executionTable.insertAdjacentHTML(
    "beforeend",
    `
          <tr>
            <td class=${className}>24,677.16</td>
            <td class="normal_color">0.00055589</td>
            <td class="gray_color">17:21:14</td>
          </tr>
    `
  );
}

for (let i = 0; i < 17; i++) {

const randomNumber = Math.random() * 100;

  changeDown.insertAdjacentHTML(
    "beforeend",
    `
        
          <tr>
            <td>24716</td>
            <td>0.00055589</td>
            <td>6.5496542</td>
          </tr>
        
    `
  );

  downBars.insertAdjacentHTML(
    "beforeend",
    `
          <div class="down_bar" style="width: ${randomNumber}px"></div>
        
    `
  );
}


for (let i = 0; i < 17; i++) {

 const randomNumber = Math.random() * 100;

  changeUp.insertAdjacentHTML(
    "beforeend",
    `
        
          <tr>
            <td>24716</td>
            <td>0.00055589</td>
            <td>6.5496542</td>
          </tr>
        
    `
  );

  upBars.insertAdjacentHTML(
    "beforeend",
    `
          <p class="up_bar" style="width: ${randomNumber}px"></p>
        
    `
  );
}