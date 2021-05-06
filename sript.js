//alert("Привет, мир!");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
document.querySelector(".red").onclick=function(E)
  {
    //document.getElementsByClassName("block2").style.backgroundColor = "#AA0000";
        let colorDivs = document.getElementsByClassName("t");
        let a = document.getElementsByClassName("text");
        //var number = document.querySelector(".text");
        //colorDivs[number.values].style.backgroundColor = "#AA0000";
       // for( let i = 0; i < colorDivs.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
         // colorDivs[i].style.color = "white";
        colorDivs[a[0].value -1].style.color = "red";
     ///   alert("lakj"); 
  }
  document.querySelector(".green").onclick=function(E)
  {
    let colorDivs = document.getElementsByClassName("t");
    let a = document.getElementsByClassName("text");
    //var number = document.querySelector(".text");
    //colorDivs[number.values].style.backgroundColor = "#AA0000";
   // for( let i = 0; i < colorDivs.length; i++){ // пsроходим циклом по всем элементам массивоподобного объекта
     // colorDivs[i].style.color = "white";
    colorDivs[a[0].value -1].style.color = "green";
  }
  document.querySelector(".blue").onclick=function(E)
  {
    let colorDivs = document.getElementsByClassName("t");
    let a = document.getElementsByClassName("text");
    //var number = document.querySelector(".text");
    //colorDivs[number.values].style.backgroundColor = "#AA0000";
   // for( let i = 0; i < colorDivs.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
     // colorDivs[i].style.color = "white";
    colorDivs[a[0].value -1].style.color = "blue";
  }
  document.querySelector(".clear").onclick=function(E)
  {
    let colorDivs = document.getElementsByClassName("t");
    //let a = document.getElementsByClassName("text");
    //var number = document.querySelector(".text");
    //colorDivs[number.values].style.backgroundColor = "#AA0000";
   // for( let i = 0; i < colorDivs.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
     // colorDivs[i].style.color = "white";
    colorDivs[0].style.color = "black";
    colorDivs[1].style.color = "black";
    colorDivs[2].style.color = "black";
    colorDivs[3].style.color = "black";
  }
    