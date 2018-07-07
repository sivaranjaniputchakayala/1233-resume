function loadjson(file,callback){
var a=new  XMLHttpRequest();
a.overrideMimeType("application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
if(a.readyState===4 && a.status=="200"){
callback(a.responseText);
}
}
a.send(null);
}
loadjson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.basics);
});
var right=document.getElementById('right');
function career(careerobject) {
var h4=document.createElement('h4');
h4.textContent="career object:";
right.appendChild(h4);
var hr=document.createElement("HR");
right.appendChild(hr);
var cop=document.createElement("p");
cop.textContent=careerobject.content;
right.appendChild(cop);
}


// var edu=document.createElement("h4");
// edu.textcontent="educational qualification:";
// edu.appendchild(document.createcontent("HR"));
// cop.appendchild(edu);
// right.appendchild(career);
