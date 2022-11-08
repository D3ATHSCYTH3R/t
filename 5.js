function back(){
    window.location="index.html";
}
status="";
o= [];
function back(){
    window.location="index.html";
}
function preload(){
 bed=loadimage("waterbottle.jpg")
}
function setup(){
canvas=createCanvas(560,490);
canvas.center();
}
function draw(){
image(bed, 0 , 0 , 560, 490);
if(status != " "){
for(i=0; i<o.length; i++){
 con=results[i].confidence;
 label=results[i].label;
}
}
}
function m(){
console.log("model is loaded");
status="true";
}
function gotResults(results, error){
    if(error){
    console.error(error);
}
console.log(results);
o=results;

}