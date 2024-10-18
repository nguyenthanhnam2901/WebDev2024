const bar = document.getElementById("bar")
const menu = document.getElementById("menu")
if(bar){
    bar.addEventListener("click",()=>{
        // console.log(3216574);
        
        menu.classList.toggle("active")
    })
}