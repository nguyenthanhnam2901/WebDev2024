const sortBtns = document.querySelectorAll(".job-id > *");
const sortItems = document.querySelectorAll(".jobs-container > *");

sortBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        sortBtns.forEach((btn)=> btn.classList.remove("active"));
        btn.classList.add("active");
         
        const targetData = btn.getAttribute("data-target");
        // console.log(targetData);
        
        sortItems.forEach((item)=>{
            item.classList.add('delete');
            // console.log(item.getAttribute("data-item"));
            
            if(item.getAttribute("data-item") === targetData ||  targetData === "all"){
                console.log(item);
                item.classList.remove("delete")
                
            }
        })
    })
})