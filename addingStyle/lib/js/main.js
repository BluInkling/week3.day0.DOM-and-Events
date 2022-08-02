let rightS=document.querySelector(".right_side") //or getElementbyClassName
console.log(rightS)
    
rightS.style.background="#d3c26f"

names=document.querySelectorAll(".name")

for(i=0;i<names.length;i++){
    names[i].style.textShadow="-6px 5px 2px yellow"

}