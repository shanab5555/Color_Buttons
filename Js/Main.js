// one case
//================================================================================
// document.querySelectorAll("button").forEach(function(item){

//     item.onclick=function(){

//         document.querySelector("#light").classList.add("fa-shake");
        
//         setTimeout(() => {

//             document.querySelector("#light").classList.remove("fa-shake")
//                      } , 500 );
    
//         setTimeout(() => {
//             document.querySelector("#light").style.color=item.dataset.button;
//                      } , 250 );
    
// }
// })
//==================================================================================

// two case
document.querySelector(" #red ").onclick = function(event) {
    
    document.querySelector("#light").classList.add("fa-shake");

    setTimeout(() =>{document.querySelector("#light").classList.remove("fa-shake")}
    ,500)
    
    setTimeout(()=>{document.querySelector("#light").style.color= event.target.id}
    ,250)
    
}

document.querySelector(" #black ").onclick = function(event) {
    
    document.querySelector("#light").classList.add("fa-shake");

    setTimeout(() =>{document.querySelector("#light").classList.remove("fa-shake")}
    ,500)
    
    setTimeout(()=>{document.querySelector("#light").style.color= event.target.id}
    ,250)
    
}

document.querySelector(" #blue ").onclick = function(event) {
    
    document.querySelector("#light").classList.add("fa-shake");

    setTimeout(() =>{document.querySelector("#light").classList.remove("fa-shake")}
    ,500)
    
    setTimeout(()=>{document.querySelector("#light").style.color= event.target.id}
    ,250)
    
}

document.querySelector(" #aqua ").onclick = function(event) {
    
    document.querySelector("#light").classList.add("fa-shake");

    setTimeout(() =>{document.querySelector("#light").classList.remove("fa-shake")}
    ,500)
    
    setTimeout(()=>{document.querySelector("#light").style.color= event.target.id}
    ,250)
    
}

document.querySelector(" #yellow ").onclick = function(event) {
    
    document.querySelector("#light").classList.add("fa-shake");

    setTimeout(() =>{document.querySelector("#light").classList.remove("fa-shake")}
    ,500)
    
    setTimeout(()=>{document.querySelector("#light").style.color= event.target.id}
    ,250)
    
}

document.querySelector(" #green ").onclick = function(event) {
    
    document.querySelector("#light").classList.add("fa-shake");

    setTimeout(() =>{document.querySelector("#light").classList.remove("fa-shake")}
    ,500)
    
    setTimeout(()=>{document.querySelector("#light").style.color= event.target.id}
    ,250)
    
}
