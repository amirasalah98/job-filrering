var categories= document.querySelectorAll(".categories"),
allContent= document.querySelectorAll("div .main-flex"),
allcontainer=document.getElementsByClassName("container"),
showArea,
eachCategory,
all,
allCatg,
clearThis,
pushArr=[],
arr1,
clearAll,
allContent,
arrayForFilter=[],
arrayForAll=[],
// dataVal,
dataRole,
dataLevel,
dataTools,
dataLanguages,
contentName,
displayContent,
filter;

arrayForAll.push(allContent)
console.log(arrayForAll)

showArea=document.createElement("div")
all=document.createElement("div")
allCatg=document.createElement("div")
clearAll=document.createElement("a")
clear=document.createTextNode("Clear")
eachCategory=document.createElement("span")
clearThis=document.createElement("a")
clearSign=document.createTextNode("X")


for (i=0;i<categories.length;i++){
    categories[i].addEventListener('click',function show(){

dataRole=this.getAttribute('data-role')
dataLevel=this.getAttribute('data-level')
dataTools=this.getAttribute('data-tools')
dataLanguages=this.getAttribute('data-languages')
       
        showArea.setAttribute("id","showArea")
        document.body.appendChild(showArea)
    
        
        all.setAttribute("id","all")
        showArea.appendChild(all)
    
        allCatg.setAttribute("id","allCatg")
        all.appendChild(allCatg)
    
        eachCategory.setAttribute("id","eachCategory")
        allCatg.appendChild(eachCategory)
    
        clearThis.setAttribute("class","clearThis")
        console.log(clearSign)
        clearThis.appendChild(clearSign)
        eachCategory.appendChild(clearThis)
        console.log(clearThis) // de 3mla mshakl 3shan textContent bt5leh ya5od l content l awl w yseb de
    
        clearAll.setAttribute("id","clearAll")
        clearAll.appendChild(clear)
        all.appendChild(clearAll)
    
     categoryVal=this.textContent+" "+clearThis.textContent;
    console.log(categoryVal)
     pushArr.push(categoryVal)
    
     arr1=pushArr.join("")
        eachCategory.innerHTML=arr1
      
        filtering()

    })   
    } 

 function filtering(){
        for(var i=0;i<allContent.length;i++){
            contentName=allContent[i].classList
            if(contentName.contains(dataLanguages||dataLevel||dataRole||dataTools)){
                arrayForFilter.push(this)
            }else{
                allContent[i].style.display='none'


                clearAll.onclick=function clearAll(){
                    window.location.reload()

                }

            }

    }

 }
