// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 50, left: 100},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    function type(d) {
      d.value = +d.value; // coerce to number
      return d;
    }

let scaleVert = d3.scaleLinear()
    .range([height, 0]);


var chartVert = d3.select(".chart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // text label for the y axis
chartVert.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0-margin.left)
      //center in the middle
      .attr("x",0 - (height / 2))
      .attr("dy", "2em")
      .style("text-anchor", "middle")
      // .style("color", "blue")
      .text("Age");

  chartVert.append("text")
    .attr("y", height-margin.top)
    .attr("x",(height / 2)+margin.left)
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("People in MyTown, USA");

d3.csv("dummy_data.csv", type, function(error, data) {
  scaleVert.domain([0, d3.max(data, function(d) { return d.age; })]);

  //here we are evenly dividing the area depending on the # of bars we will have
  var barWidth = width / data.length;

  var bar = chartVert.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; })


// y is how far from the top, the x is how far from the left.
  bar.append("rect")
      .attr("y", function(d) { return scaleVert(d.age); })
      .attr("height", function(d) { return height - scaleVert(d.age); })
      .attr("width", barWidth - 1);

  // bar.append("text")
  //     .attr("x", barWidth / 2)
  //     .attr("y", function(d) { return scaleVert(d.age) + 3; })
  //     .attr("dy", ".75em")
  //     .text(function(d) { return `${d.age} ${d.name}`; });
});
