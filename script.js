let lead=[]
let btn=document.getElementById("btn")
let btnS=document.getElementById("btnS")
let del=document.getElementById("del")


// btn.addEventListener("click",tab())
// function tab(){
//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//     console.log("not working")
//     lead.push(tabs[0].url)
//     localStorage.setItem("lead",JSON.stringify(lead))
//     rendetList()

// })

// }

btn.addEventListener("click", function() {
       chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log("not working")
    lead.push(tabs[0].url)
    localStorage.setItem("lead",JSON.stringify(lead))
    rendetList()

})
  });
   let input=document.getElementById("inp");
   let ul1=document.getElementById("ul");
let leadLocal=JSON.parse(localStorage.getItem("lead"))
if (leadLocal){
    lead=leadLocal
    rendetList()
}
btnS.addEventListener("click", function() {
    lead.push(input.value)
    rendetList()
    localStorage.setItem("lead",JSON.stringify(lead))
    input.value=""
  });


function rendetList(){
    listItem=""
    for(i=0;i<lead.length;i++){
        listItem += "<li><a target='_blank' href='"+lead[i]+"'>"+ lead[i]+"</a></li>"
}

    ul1.innerHTML=listItem
}
let sl=listItem.slice(1,3)
console.log[sl]
del.addEventListener("dblclick", function() {
    lead=[]
    ul1.textContent=[]
    input.value=""
    localStorage.clear()
  });
