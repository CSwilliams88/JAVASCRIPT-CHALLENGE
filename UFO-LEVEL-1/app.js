// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
tableData.forEach((alien) => {
    //console.log(alien);
    var row = tbody.append("tr");
    Object.entries(alien).forEach(([key, value]) => {
       // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
}); 

var button = d3.select("#filter-btn");
button.on("click", runEnter);

function runEnter() {
  //Prevent page from refreshing
  d3.event.preventDefault();

 //Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");

 //Get the value property of the input element
 var inputValue = inputElement.property("value");
 console.log(inputValue);
 
 var filteredData = tableData.filter(alien => alien.datetime === inputValue);
 console.log(filteredData);
 tbody.html("")
 
 filteredData.forEach((alien) => {
  //console.log(alien);
  var row = tbody.append("tr");
  Object.entries(alien).forEach(([key, value]) => {
     // console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
});
 
}
