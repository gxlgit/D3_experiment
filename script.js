let data1 = [ 20, 45, 2, 350, 189,90 ]

/*
https://scrimba.com/p/pEKMsN/cast-1953
Basic bar graph:
-selects all div contained in a 'bar-graph' class
--.data attaches itself to those selected divs
--we use .enter() and .append() to create & append
  new divs if there weren't enough selected for all the data
--style those divs (in this case set the width equivalent to the data)
--add text to those divs
*/
d3.select(".bar-graph")
  .selectAll("div")
  .data(data1)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });

/*
https://scrimba.com/p/pEKMsN/c3kE4Ta
How to include scaling for dynamically sizing nodes based on data
*/

let scale = d3.scaleLinear()
// domain says the range of our data values
 // .domain([0, d3.max(data1)])
  .domain([0, 350])
  // range is what those data values should squeeze into
  .range([0, 300])
 // console.log('passed linear');
  //this code is similar to above, but instead we run scale on the data
  d3.select(".bar-graph1")
    .selectAll("div")
    .data(data1)
      .enter()
      .append("div")
      .style("width", function(d) { return scale(d) + "px"; })
      .text(function(d) { return d; });


// Scalable Vector Graphics
//https://bost.ocks.org/mike/bar/2/
// to run this on chrome in cli start a server  python -m SimpleHTTPServer
//localhost:8000
var width = 420,
    barHeight = 20;

let scaleSvg = d3.scaleLinear()
    .range([0, width]);

var chart = d3.select(".bar-graph-svg")
    .attr("width", width);

d3.tsv("data.tsv", type, function(error, data) {
  scaleSvg.domain([0, d3.max(data, function(d) {
    return d.value; })]);

  chart.attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", function(d) { return scaleSvg(d.value); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", function(d) { return scaleSvg(d.value) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return `${d.value} ${d.name}`; });
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}
