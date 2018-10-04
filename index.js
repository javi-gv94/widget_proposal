// var dataset = {
//     lemons: [50, 50],
//     apples: [50, 50],
//     oranges: [33.3, 33.3, 33.3],
//   };
  
//   var width = 800,
//       height = 600,
//       cwidth = 90;
  
//   var color = d3.scale.category20();
  
//   var pie = d3.layout.pie()
//       .sort(null);
  
//   var arc = d3.svg.arc();
  
//   var svg = d3.select("body").append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
//   var gs = svg.selectAll("g").data(d3.values(dataset)).enter().append("g");
//   var path = gs.selectAll("path")
//       .data(function(d) { return pie(d); })
//     .enter().append("path")
//     .attr("class", "arc")
//     .attr("id", function (d,i) { return "#path_" + i; })
//       .attr("fill", function(d, i) { return color(i); })
//       .attr("d", function(d, i, j) { return arc.innerRadius(10+cwidth*j).outerRadius(cwidth*(j+1))(d); });
  
//     //   svg.selectAll("path").append("text")
//     //   .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
//     //   .attr("dy", ".35em")
//     //   .style("text-anchor", "middle")
//     //   .text("hols");

//     svg.selectAll("path")
//         .append("text")
//             .attr("x", 8)
//             .attr("dy", 28)
//         .append("textPath")
//         .attr("xlink:href", function (d,i) { return "#path_" + i; })
//         .text("hola");

// $(function () {
//     Highcharts.chart('container', {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },
//         // title: {
//         //     text: 'Browser<br>shares<br>2015',
//         //     align: 'center',
//         //     verticalAlign: 'middle',
//         //     y: 40
//         // },
//         tooltip: {
//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         plotOptions: {
//             pie: {
//                 dataLabels: {
//                     enabled: true,
//                     distance: -50,
//                     style: {
//                         fontWeight: 'bold',
//                         color: 'white'
//                     }
//                 },
//                 startAngle: 0,
//                 endAngle: 360,
//                 center: ['50%', '50%']
//             }
//         },
//         series: [ {
//             type: 'pie',
//             name: 'Proprietary or Undetectable',
//             innerSize: '10%',
//             data: [{name: "HOLA", y: 50},
//             {name: "ADIOS", y: 50},
            
                
//             ],
//             dataLabels: {
//                 formatter: function() {
//                     return this.point.name
//                 },
//                 color: 'white',
//                 distance:-200
//             }             
                
            
//         },{
//             type: 'pie',
//             name: 'Election',
//             size: '100%',
//             innerSize: '40%',
//             data: [{name: "jajaj", y: 50},
//             {name: "jejej", y: 50},
//             ],
//             dataLabels: {
//                 formatter: function() {
//                     return this.point.name
//                 },
//                 color: 'white',
//                 distance:-100
//             }   
//         }, {
//             type: 'pie',
//             name: 'Proprietary or Undetectable',
//             innerSize: '70%',
//             data: [{name: "A", y: 33.33},
//             {name: "B", y: 33.33},
//             {name: "C", y: 33.33}
//         ]
//         }]
//     });
// });



var data = { label: 'Aggressive', pct: [33.3, 33.3, 33.3] };
var data2 = { label: 'a', pct: [50, 50] };
var data3 = { label: 'b', pct: [50, 50] };

var labels = ['HOLA', 'ADIOS', 'QUE TAL'];

var w = Math.round($(window).width()* 0.3),                       // width and height, natch
    h = Math.round($(window).width()* 0.3),
    r = Math.min(w, h) / 2,        // arc radius
    dur = 750,                     // duration, in milliseconds
    color = d3.scale.category10(),
    donut = d3.layout.pie().sort(null),
    arc1 = d3.svg.arc().innerRadius(r - 60).outerRadius(r - 0);
    arc2 = d3.svg.arc().innerRadius(r - 120).outerRadius(r - 60);
    arc3 = d3.svg.arc().innerRadius(r - 180).outerRadius(r - 120);
    console.log(arc1)

// ---------------------------------------------------------------------
var svg = d3.select("#d3portfolio").append("svg:svg")
    .attr("width", w).attr("height", h);

var arc_grp = svg.append("svg:g")
    .attr("class", "arcGrp")
    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

var arc_grp2 = svg.append("svg:g")
.attr("class", "arcGrp")
.attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

var arc_grp3 = svg.append("svg:g")
.attr("class", "arcGrp")
.attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

var label_group = svg.append("svg:g")
    .attr("class", "lblGroup")
    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

var label_group2 = svg.append("svg:g")
.attr("class", "lblGroup")
.attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

var label_group3 = svg.append("svg:g")
.attr("class", "lblGroup")
.attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

// GROUP FOR CENTER TEXT
var center_group = svg.append("svg:g")
    .attr("class", "ctrGroup")
    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

// // CENTER LABEL
// var pieLabel = center_group.append("svg:text")
//     .attr("dy", ".35em").attr("class", "chartLabel")
//     .attr("text-anchor", "middle")
//     .text(data.label);

// DRAW ARC PATHS
////////////////////////////////////////////////////////////////////////
var arcs = arc_grp.selectAll("path")
    .data(donut(data.pct));
arcs.enter().append("svg:path") 
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    .attr("fill", function(d, i) { return color(i);})
    .attr("id", function(d,i) { return "myArc_out_"+i; }) //Unique id for each slice
    .attr("d", arc1)
    .each(function(d,i) {
        //A regular expression that captures all in between the start of a string
        //(denoted by ^) and the first capital letter L
        var firstArcSection = /(^.+?)L/;

        //The [1] gives back the expression between the () (thus not the L as well)
        //which is exactly the arc statement
        var newArc = firstArcSection.exec( d3.select(this).attr("d") )[1];
        //Replace all the comma's so that IE can handle it -_-
        //The g after the / is a modifier that "find all matches rather than
        //stopping after the first match"
        newArc = newArc.replace(/,/g , " ");

        //Create a new invisible arc that the text can flow along
        svg.append("path")
            .attr("class", "hiddenDonutArcs")
            .attr("id", "donutArc"+i)
            .attr("d", newArc)
            .style("fill", "none");
    });

// DRAW SLICE LABELS
// var sliceLabel = label_group.selectAll("text")
//     .data(donut(data.pct));
// sliceLabel.enter().append("svg:text")
//     .attr("class", "arcLabel")
//     .attr("transform", function(d) { return "translate(" + arc1.centroid(d) + ")"; })
//     .attr("text-anchor", "middle")
//     .append("textPath")
//     .attr("xlink:href",function(d,i){return "#myArc_"+i;})
//     .text(function(d, i) {return labels[i]; });

    // label_group.selectAll("text")
    // .data(data.pct)
    // .enter().append("text")
    // .attr("class", "myText")
    // .attr("x", 300)   //Move the text from the start angle of the arc
    // .attr("dy", 30) //Move the text down
    // .append("textPath")
    // .attr("xlink:href",function(d,i){return "#myArc_out_"+i;})
    // .text(function(d, i) {  return labels[i]; });

    label_group.selectAll("text")
    .data(data.pct)
   .enter().append("text")
    .attr("class", "donutText")
    .attr("dy", 30)
   .append("textPath")
    .attr("startOffset","50%")
    .style("text-anchor","middle")
    .attr("xlink:href",function(d,i){return "#donutArc"+i;})
    .text(function(d, i) {  return labels[i]; });

//////////////////////////////////////////////////////////////////////////////////////
    var arcs = arc_grp2.selectAll("path")
    .data(donut(data2.pct));
arcs.enter().append("svg:path")
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    .attr("fill", function(d, i) {return color(i);})
    .attr("id", function(d,i) { return "myArc_mid_"+i; }) //Unique id for each slice
    .attr("d", arc2)
    .each(function(d) {this._current = d});

// DRAW SLICE LABELS
label_group2.selectAll("text")
.data(data2.pct)
.enter().append("text")
.attr("class", "myText")
.attr("x", 300)   //Move the text from the start angle of the arc
.attr("dy", 30) //Move the text down
.append("textPath")
.attr("xlink:href",function(d,i){return "#myArc_mid_"+i;})
.text(function(d, i) {return labels[i]; });


//////////////////////////////////////////////////////////////////////////////////////
    var arcs = arc_grp3.selectAll("path")
    .data(donut(data3.pct));
arcs.enter().append("svg:path")
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    .attr("fill", function(d, i) {return color(i);})
    .attr("id", function(d,i) { return "myArc_in_"+i; }) //Unique id for each slice
    .attr("d", arc3)
    .each(function(d) {this._current = d});

// DRAW SLICE LABELS
label_group3.selectAll("text")
.data(data3.pct)
.enter().append("text")
.attr("class", "myText")
.attr("x", 300)   //Move the text from the start angle of the arc
.attr("dy", 30) //Move the text down
.append("textPath")
.attr("xlink:href",function(d,i){return "#myArc_in_"+i;})
.text(function(d, i) {return labels[i]; });


