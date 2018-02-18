var price = document.querySelectorAll(".price");
var food = document.querySelectorAll(".food");

var foods = [];
var prices = [];

console.log(price);
console.log(price[0].innerHTML);
console.log(food);


function addItem(i) {
  foods.push(food[i].innerHTML);
  prices.push(price[i].innerHTML);
};

function generateList(){
  var div = document.querySelectorAll("div");
  var total = 0;
  for (var i = 0; i < div.length; i++){
    div[i].style.display = "none";
  };
  var greeting = document.createElement("h1");
  greeting.innerText = "Your Shopping List";
  document.body.appendChild(greeting);
  greeting = document.createElement("ol"); //isn't nesting
  document.body.appendChild(greeting);
  for (var i = 0; i < foods.length; i++){
    greeting = document.createElement("li");
    greeting.innerText = foods[i] + " $" + prices[i];
    document.body.appendChild(greeting);
    total += Number(prices[i]);
  };
  greeting = document.createElement("h4")
  greeting.innerText = "Total: $" + total;
  document.body.appendChild(greeting);
}
