/* .js files add interaction to your website */

var factList = [
  "Out of all bankrupcies, 62.1% are caused by high medical biils",
  "America pays for healthcare more than any other country",
  "In many cities, healthcare prices vary widely for the same service",
"Receiving care for a heart attack will cost you an average of $20,246.",
  
];

console.log(factList);

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
   count++;
  if (count == factList.length){
    count = 0;
  }
}


