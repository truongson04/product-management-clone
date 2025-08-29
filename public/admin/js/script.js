const buttons = document.querySelectorAll("[button-status]")
if(buttons.length>0){
    buttons.forEach((btn)=>{
        
        btn.addEventListener("click",function (){
            const status = this.getAttribute("button-status");
           
            
        let url= new URL(window.location.href);
        if(status){
            url.searchParams.set("status", status);
        }
        else{
            url.searchParams.delete("status");
        }
        window.location.href=url.href;

        })
    })
}
   
const searchButton = document.querySelector(".search-btn");
searchButton.addEventListener("click", (e)=>{
    e.preventDefault(); 
    let url= new URL(window.location.href);
    const keyword = document.querySelector("#form-search").querySelector("input").value
    if(keyword){
         url.searchParams.set("keyword", keyword);
    }
    else{
        url.searchParams.delete("keyword");
    }
    window.location.href=url.href;

    
})
const buttonPagination = document.querySelectorAll("[button-paginaion]");
buttonPagination.forEach((buttons)=>{
 buttons.addEventListener("click", ()=>{
   const currentPage= buttons.getAttribute("button-paginaion");
   let url= new URL(window.location.href);
   url.searchParams.set("page", currentPage);
   window.location.href= url.href;
 })
})
