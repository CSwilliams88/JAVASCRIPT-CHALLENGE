// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
data.forEach((UFOdata) => {
    console.log(UFOdata);
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
}); 


