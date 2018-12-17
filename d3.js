
// data

var usa=[
1307.1258,
10039.265,
16736.6,
23946.0049,
32502.9625,
43101.4611,
55882.9955,
72565.6928,
100938.408,
316789.3396,
67380.9855
]

var china=[

971.5787,
2980.1554,
4917.058,
6871.6401,
8852.5727,
11150.6467,
14444.7172,
19387.317,
27543.9767,
68398.4164,
16551.80789

]

var europe = [
2205.5949,
9733.8582,
14437.8161,
18899.943,
23430.1515,
28253.9786,
33625.943,
40339.5071,
52766.6367,
134024.2126,
35771.76417

]

var india = [
1200.7486,
1950.5947,
2457.4624,
2936.2626,
3466.2548,
4105.3613,
4952.4864,
6189.6427,
8634.595,
45868.095,
8176.15035


]


var russia = [
946.5228,
8034.6052,
11515.2765,
14176.7092,
17019.7641,
20297.6087,
24641.9149,
30629.1539,
39798.7749,
140435.2268,
30749.5557
]

var arabia = [
4420.3276,
8894.719,
12328.3097,
16122.7753,
20006.8024,
25990.8419,
34061.0635,
57490.5502,
121751.7674,
494908.5234,
79597.56804

]

var france=[
3386.8193,
14414.2921,
21966.0119,
27482.0828,
32677.9033,
38294.5583,
43301.2167,
51752.3235,
66301.4391,
145092.066,
44466.8713
]

var brasil=[
852.9212,
4338.5744,
7313.2012,
8075.766,
9484.9766,
11368.735,
13587.7677,
16928.2494,
23524.7663,
114872.2207,
21034.71785

]

var poland=[
6012.4547,
10524.9322,
12983.0534,
15158.5092,
17294.6729,
19589.4051,
22485.7615,
26223.238,
32546.3608,
104238.2802,
26705.6668
]

var world=[
993.0916,
2475.364,
3778.9168,
5359.9273,
7403.8547,
10112.8572,
14230.8284,
21190.4106,
33727.2937,
108575.5789,
20784.81232
]

var dataList=[
usa,
china, 
europe,
france,
india,
poland,
arabia,
russia,
brasil,
world

];

var dataTitleList=[
'USA',
'China', 
'Europe',
'France',
'India',
'Poland',
'Saudi Arabia',
'Russian Federation',
'Brasil',
'World'
]

// declare
var rawData;

var newData=[];
var rawAvg;
var avg;
var rawMaxData=0;
var maxdata=0;
var data;

var spots=[];

var svg;
var svgw=600;
var svgh=500;
var svgwout=550;
var svghout=520;
var paddingx;
var paddingy;

var y ;

var r;
var doth;
var iconspace;

var answer;
var half;
var total;
var topportion;
var placeTitle;

var guess;
var dialog=document.getElementById('dialog');
var mainmenu=document.getElementById('mainmenu');
var submenu=document.getElementById('submenu');
var guessmenu=document.getElementById('guessmenu');
var answermenu=document.getElementById('answermenu');
var detail1menu=document.getElementById('detail1menu');
var detail2menu=document.getElementById('detail2menu');
var detail3menu=document.getElementById('detail3menu');
var allgraph=document.getElementById('all');
var information=document.getElementById('information');
var animation=document.getElementById('animation');

function draw(place, all=false){
d3.select('#svg svg').remove();

if (place==="placeholder"){
  place=usa;
  document.getElementById('svg').style.opacity="0.5"
}
else{document.getElementById('svg').style.opacity="1"};

if (all===false){
  var container='#svg';
  var size=0.9;
   svgw=600;
 svgh=500;
 svgwout=550;
 svghout=520;
 paddingx=30;
 paddingy=50;
}else{
  var container='#all';
  var size=0.4;
   svgw=300;
 svgh=220;
 svgwout=310;
 svghout=230;
 paddingx=30;
 paddingy=50+50;
}

rawData=place;
newData=[];
rawMaxData=0;
maxdata=0;
spots=[];
total=0;
// var newData=[];
// var rawAvg;
// var avg;
// var rawMaxData=0;
// var maxdata=0;

// find maxdara (exclude average) & total & top portion
rawData.forEach(
  function(d,i){
    if (i<10){
          total+=d;
      if (rawMaxData<d){
      rawMaxData=d;
    }
  }  } );

topportion=Math.round((rawData[9]/total)*100);
console.log(topportion );

// set the strim scale of the data
var trim = d3.scale.linear()
    .domain([0, rawMaxData])
    .range([0, 50]);
    // console.log("rawmax:",rawMaxData);

// arange data
rawData.forEach(
  function(d,i){
    let newd= Math.round(trim(d));
    if (i<10){
    newData.push(newd);
      if (maxdata<newd){
      maxdata=newd;
    }
  };

    if(i=10){
      rawAvg=Math.round(d);
      avg=Math.round(trim(d));
    };
  } 
)


  console.log("new data:", newData);
  console.log("avg:", avg);
  console.log("maxdata:", maxdata);
  console.log("rawAvg:", rawAvg);





// // the sum of data must be a multiple of 10
// // var data=[10,20,30,40,50,50,60,70,80,90]
// // var data=[5,10,10,20,20,30,40,50,90,100]
// // var data=[1,2,2,3,5,7,10,20,30,50]

data = newData;

// var spots=[];

// var svgw=600;
// var svgh=500;
// var svgwout=550;
// var svghout=520;
// var maxdata=50;


// function sumData(arr){
//     var sum=0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     };
//     return sum;
// };

// var avg=Math.round(sumData(data)/data.length);
// console.log("avg:",avg);


 svg = d3.select(container)
 .append("svg")
 .attr("width", svgwout)
 .attr("height", svghout)
 .attr("border","1px");

svg=svg.append("g");
svg
.attr("transform","translate("+paddingx+","+paddingy+") scale("+size+")");


 y = d3.scale.linear()
    .domain([0, maxdata])
    .range([0, svgh]);

r=y(0.45)
doth=y(1)
iconspace=35


data.forEach(function(d,i){
    let columnx=60*i+r;
  let columny=y(maxdata);
    svg.append("text")
    .attr("class", "fa")
    .attr('font-size', "30px" )
    .text(function(d) { return '\uf007' })
  .attr("text-anchor","middle")
    .attr("x",columnx)
  .attr("y",columny)
  .attr('fill', '#767676');
      svg.append("text")
    .attr('font-size', "10px" )
 .style('fill', "#fff")
    .text(i+1)
  .attr("text-anchor","middle")
    .attr("x",columnx)
  .attr("y",columny);
})
// draw background dots & icon
data.forEach(function(d,i) {
  let columnx=60*i+r;
  let columny=y(maxdata-avg);
  for (a=1;a<avg+1; a++) {
    // console.log("a:",a);
    svg
    .append("circle")
    .attr("cx", columnx)
    .attr("cy",columny+doth*a-r-iconspace)
    .attr("r",r)
    .attr("fill", "red")
    .attr("opacity","1")
  ;
    //       svg
    // .append("text")
    // .text(a)
    // .attr("x", columnx)
    // .attr("y",columny+doth*a-r)
    // .attr("fill", "black");
  } } );



    


// draw avg dots+record movable dots & new spots
data.forEach(function(d,i) {
  let datanumber=d;
  let columnx=60*i+r;
  let columny=y(maxdata-avg)-iconspace;
  for (a=1;a<Math.round(avg+1); a++) {
    // console.log("a:",a);
    svg
    .append("circle")
    .attr("cx", columnx)
    .attr("cy",columny+doth*a-r)
    .attr("r",r)
    .attr("fill", "#FFDA00")
    .attr("class",function(){
      if(a<avg+1-datanumber){
        // console.log(datanumber,a,"move");
        return "move";}
      else{return ""};
    });
    
          };

  
  for (a=1;a<Math.round(maxdata+1); a++) {
    if(a<maxdata-avg+1 && a>maxdata-datanumber){
    //         svg
    // .append("text")
    // .text(a)
    // .attr("x", columnx)
    // .attr("y",doth*a+r)
    // .attr("fill", "black");
      spots.push([columnx,doth*a-r-iconspace]);
  }
  
  }});

// avg line
// svg.append("line")
//   .attr("x1",0)
// .attr("y1",y(maxdata-avg)-iconspace)
// .attr("x2",svgw)
// .attr("y2",y(maxdata-avg)-iconspace)
// .attr("stroke","red")
// .attr("stroke-width", 2)
// .attr("class","avg")
// .attr("alt",rawAvg);

};

function move(animation=true) {

if (animation===false){
  var del=0;
  var dur=0;
}else{
  var del=200;
  dur=1000;
}
var movingdots=d3.selectAll(".move");
// console.log("move dots:",movingdots[0].length);
// console.log(movingdots);


// reshape the spots and dots to avoid conflicts

var spl = spots.length;
var mol = movingdots[0].length;


// if(spl<mol){
// movingdots=movingdots[0].slice(0,spl);
// console.log(movingdots);

// };

// if(spl>mol){


// }

console.log("spl:",spl);
console.log("mol:",mol);



movingdots.each(
  function(d,i){
    // console.log("d,i:",d,i);
    if(i<spl){

  d3.select(this).transition()
.ease("easeBounce")
    .delay(del)
.duration(dur)
.attr("cx", 
     function(){
    // console.log(spots[i][0]);
    // console.log(spots[i]);

  return spots[i][0]
  })
.attr("cy",
          function(){
    // console.log(spots[i][1]);
  return spots[i][1];
  });};
if(i>spl){
    d3.select(this).transition()
    .delay(del)
.duration(dur)
.attr("style","opacity:0;");

}
     
  });
  
// draw dots again
data.forEach(function(d,i) {
  let columnx=60*i+r;
  let columny=y(maxdata-d);
  var moved=svg.append("g").attr("class",i+1).attr("alt",(Math.round(rawData[i])));
  columnx=60*i+r;
  var columnyp=y(maxdata);
    moved.append("text")
    .attr("class", "fa")
    .attr('font-size', "30px" )
    .text(function(d) { return '\uf007' })
  .attr("text-anchor","middle")
    .attr("x",columnx)
  .attr("y",columnyp)
  .attr('fill',
       function(){
        if(d<avg){
          answer=i+1;
          if(d<avg/2){half=i+1};
        return "red"
      }else{
        return "#767676"
      }
        
      });
      moved.append("text")
    .attr('font-size', "10px" )
 .style('fill', "#ffffff" )
    .text(i+1)
  .attr("text-anchor","middle")
    .attr("x",columnx)
  .attr("y",columnyp);


  let columnya=y(maxdata-avg);
  for (a=1;a<avg+1; a++) {
    // console.log("a:",a);
    moved
    .append("circle")
    .attr("cx", columnx)
    .attr("cy",columnya+doth*a-r-iconspace)
    .attr("r",3*r)
    .attr("fill", "red")
        .attr("style","opacity:0;")
    // .transition()
    // .delay(1300)
    // .attr("style","opacity:100;")
  };
  
  for (a=1;a<d+1; a++) {
    // console.log("a:",a);
    moved
    .append("circle")
    .attr("cx", columnx)
    .attr("cy",columny+doth*a-r-iconspace)
    .attr("r",r)
    .attr("fill", "#FFD700")
    .attr("style","opacity:0;")
    .transition()
    .delay(del*3)
    .duration(dur)
    .attr("style","opacity:1;")
    // .transition()
    // .delay(1200)
    // .attr("style","opacity:100;")
  ;
    
    
    //       svg
    // .append("text")
    // .text(a)
    // .attr("x", columnx)
    // .attr("y",columny+doth*a-r)
    // .attr("fill", "black");
  } } );



// var avgtooltip = d3.select("svg").append("text").attr("id", "avgtoolTip"); 
                   
//   avgtooltip                 
//     .attr("x",0)
//     .attr("y",maxdata-avg)             
//     .text("<b>" +"Average income: "
//       +document.getElementsByClassName("avg")[0].getAttribute("alt"))
//     .attr("opacity","0")
//     .transition()
//     .delay(1200)
//     .duration(1000)
//     .attr("opacity","0.4")
//     ;
    // console.log(document.getElementsByClassName("avg")[0].getAttribute("alt"))


var dotstooltip = d3.select("body").append("div").attr("id", "dotstoolTip").style("position", "absolute"); 

svg.selectAll("g")
  .on("mousemove", function (d,i) {             
  d3.select(this)
  // .attr("opacity", "0.5")
  ;
  var th;
        if(i<1){
        th="st"};
        if(i===1){
        th="nd"};
        if(i>1){
        th="th"};        
  dotstooltip                 
    .style("left", d3.event.pageX + 5 + "px")       
    .style("top", d3.event.pageY - 70 + "px")        
    .style("display", "inline-block")                 
    .html("Average income of the <br/>"
      +this.getAttribute("class")
      +th
      +" 10% population: <br/>"
      +"<span>"
      +this.getAttribute("alt")
      +"</span>"
      );

})         
  .on("mouseout", function (d) {             
  d3.select(this).attr("opacity", "1");             
  dotstooltip.style("display", "none");         
}); 


}


function markAnswer(subtitle=true){

  svg
  .append('rect')
  .attr("x",0)
  .attr("y",y(maxdata-avg)-iconspace-70)
  .attr('height','16')
  .attr("width",0)
  .attr("fill","red")

  .transition()
  .duration(1000)
  .attr('width',60*answer*0.9)
  ;
svg
  .append('text')
  .attr("x",60*answer*0.9+20)
  .attr("y",y(maxdata-avg)-iconspace-50)
  .style("fill","red")
  .style("font-size","50px")
  .text(answer+"0%")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1")
  ;
  svg
  .append('text')
  .attr("x",0+10)
  .attr("y",y(maxdata-avg)-iconspace-60+2)
  .style("fill","black")
  .style("font-size","14px")
  .text("< AVG")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1")
  ;

if(subtitle===true){
    svg
  .append('text')
  .attr("x",0+10)
  .attr("y",y(maxdata-avg)-iconspace-60+2-16)
  .style("fill","rgba(250,250,250,0.8)")
  .style("font-size","14px")
  .text("Around "+answer+"0% earn less than the average")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1")

  ;}
}


function markHalf(subtitle=true){

  svg
  .append('rect')
  .attr("x",0)
  .attr("y",y(maxdata-avg)-iconspace-70-60)
  .attr('height','16')
  .attr('width',0)
  .attr("fill","#ee00ff")

  .transition()
  .duration(1000)
  .attr('width',60*half*0.9)

  ;
svg
  .append('text')
  .attr("x",60*half*0.9+20)
  .attr("y",y(maxdata-avg)-iconspace-50-60-5)
  .style("fill","#ee00ff")
  .style("font-size","18px")
  .text(half+"0%")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1");

  svg
  .append('text')
  .attr("x",0+10)
  .attr("y",y(maxdata-avg)-iconspace-60-60+2)
  .style("fill","black")
  .style("font-size","14px")
  .text("< 1/2 of AVG")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1");


if(subtitle===true){
    svg
  .append('text')
  .attr("x",0+10)
  .attr("y",y(maxdata-avg)-iconspace-60-60+2-16)
  .style("fill","rgba(250,250,250,0.8)")
  .style("font-size","14px")
  .text("Around "+half+"0% earn less than 1/2 of the average")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1")

  ;}
}

function markTop(subtitle=true){

  var newtopportion=topportion / 10;
  svg
  .append('rect')
  .attr("x",0)
  .attr("y",y(maxdata-avg)-iconspace-70-60-60)
  .attr('height','16')
  .attr('width',0)
  .attr("fill","#FFDA00")

  .transition()
  .duration(1000)
  .attr('width',60*newtopportion*0.9)

  ;
svg
  .append('text')
  .attr("x",60*newtopportion*0.9+20)
  .attr("y",y(maxdata-avg)-iconspace-50-60-60-5)
  .style("fill","#FFDA00")
  .style("font-size","18px")
  .text(topportion+"%")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1")
  ;
  svg
  .append('text')
  .attr("x",0+10)
  .attr("y",y(maxdata-avg)-iconspace-60-60-60+2)
  .style("fill","black")
  .style("font-size","14px")
  .text("Top 10% earns")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1");


if(subtitle===true){
  svg
  .append('text')
  .attr("x",0+10)
  .attr("y",y(maxdata-avg)-iconspace-60-60-60+2-16)
  .style("fill","rgba(250,250,250,0.8)")
  .style("font-size","14px")
  .text("The top 10% population contribute to "
    +topportion+
    "% of the total income")

  .style("opacity","0")
  .transition()
  .duration(1000)
  .style("opacity","1")

  ;}

}

function markAVG(){


  svg
  .append('text')
  .attr("x",0)
  .attr("y",y(maxdata-avg)-iconspace-60-60-60+2-16-60-30)
  .style("fill","rgba(250,250,250,0.8)")
  .style("font-size","50px")
  .text("Average Income: "
    +rawAvg);

}

function markTitle(){


  svg
  .append('text')
  .attr("x",0)
  .attr("y",y(maxdata-avg)-iconspace-60-60-60+2-16-50)
  .style("fill","rgba(250,250,250,0.5)")
  .style("font-size","50px")
  .text(placeTitle);
  console.log("placetitle:", placeTitle);

}


// move();


function showDialog(number){
    var dialog=document.getElementById('dialog');
  var text=document.getElementById('text');
  var texts=["",
  "Choose a country or an area.",
  "The average income:"+rawAvg+" USD <br/> <p style='font-size:14;'>Guess how many percentage of the population earn less than average?</p>",
  "Your Answer: "+guess,
  "<p style='font-size:14;'>Your Answer: "+guess+"</p>Actual Answer: around "+answer+"0%",
  "Around "+half+"0% of the population <br/>earn less than 1/2 of the average",
  "The top 10% population contribute to <br/>"+topportion+"% of the total income.",
  "<p style='font-size:14;'>Check the income distribution of other country/ areas.</p>",
""
  // "<p style='font-size:18px;text-align:left;margin-left:30%'>Average Income: "+rawAvg
  // +"<br/> Around "+answer+"0% earn less than the average"
  // +"<br/> Around "+half+"0% earn less than 1/2 of the average"
  // +"<br/>The top 10% population contribute to "+topportion+"% of the total income"
  // +"</p>"
  ];
text.innerHTML=texts[number];
dialog.style.display="block";
}


function select(place){
  draw(place);
  showDialog(2);
  submenu.style.display="none";
  guessmenu.style.display="block";


}

function guess(number){
  guess=number;
  showDialog(3);
  guessmenu.style.display="none";
  answermenu.style.display="block";
}

function seeAnswer(){
  answermenu.style.display="none";
  move();
  showDialog(4);
  detail1menu.style.display="block";

}

function seeDetail1(){
  detail1menu.style.display="none";
  showDialog(5);
  detail2menu.style.display="block";

}

function seeDetail2(){
  detail2menu.style.display="none";
  showDialog(6);
  detail3menu.style.display="block";
}

function seeDetail3(){
  detail3menu.style.display="none";
  dialog.style.display="none";
  markAnswer();
  markHalf();
  markTop();
    markAVG();
    markTitle();
      mainmenu.style.display="block";

}

// function seeAnimation(){

//   showDialog(7);
//   mainmenu.style.display="block";
//   dialog.style.opacity="0.5";
// }

function see(place){
    information.style.display="none";
  dialog.style.display="none";
    submenu.style.display="none";
allgraph.style.display="none";
// animation.style.display="block";

  draw(place);
  move(false);
  dialog.style.opacity="0.5";
  showDialog(8);
  markAnswer();
  markHalf();
  markTop();
    markAVG();
    markTitle();
}



function seeAll(){
  allgraph.style.display="block";
  mainmenu.style.display="block";
  dialog.style.display="none";
  information.style.display="block";
  dataList.forEach( function(d,i){
selectedPlace(dataTitleList[i]);
console.log("nobug i number in all title list:",i);
draw(d,true);
move(false);
  markAnswer(false);
  markHalf(false);
  markTop(false);
  // markAVG();
  markTitle();
    });
}

function selectedPlace(place){
placeTitle=place;
console.log("placetitle:",placeTitle);
document.getElementById(place).style.opacity="1";

}

draw('placeholder');
showDialog(1);

