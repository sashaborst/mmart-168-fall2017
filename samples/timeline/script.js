
const sheets = new Sheets({
    key: '1J-UuARS1ZgsRa1w6KXsnk5G_aDJf6zmYsI0-T0PORlc' //,
    //query: "select * where D = 'C'"
});

var bardata = []; //[100,100, 30, 30, 30, 100, 100, 100, 30, 30, 30, 100];


sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    let num = 1
    data.records.forEach(record => {
        if (record.code === 'P') {
            bardata.push(100)
        } else if (record.code === 'US') {
                bardata.push(60)
        } else {
            bardata.push(30)
        }
    })
    buildChart()

});

const buildChart = () => {

    var margin = {top: 100, right: 100, bottom: 100, left: 100},
        width = 1000- margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.time.scale()
            .domain([new Date('1840-01-01'), new Date()])
            .nice(d3.time.year)
            .range([0, width]);

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .call(d3.svg.axis().scale(x).orient("bottom"));


    /* Manipulating vertical bars*/


    var height = 500,
        width = 1000,
        barWidth= 5,
        barOffset = 5;

    var yScale = d3.scale.linear()
        .domain([0, d3.max(bardata)])
        .range([0, 500])

    /*var timescale1 = d3.time.scale()
        .domain([new Date(2020,0,1),new Date(2020,0,11)])
        .range([0,10])*/


    d3.select('#chart').append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#C9D7D6')
      .selectAll('rect').data(bardata)
      .enter().append('rect')
        .style('fill', '#b19cd9')
        .attr('width', barWidth)
        .attr('height', function(d){
          return yScale(d);
        })
        .attr('x', function(d,i){
          return i * (barWidth + barOffset + 5)

        })
        .attr('y', function(d){
            return height-yScale(d);
        })
}
