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