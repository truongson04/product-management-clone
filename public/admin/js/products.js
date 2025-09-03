console.log("great");
//change the status 
const changeButton = document.querySelectorAll("[button-change-status]");
const formChange = document.querySelector("#form-change-status");

let path = formChange.getAttribute("data-path");
changeButton.forEach((buttons)=>{
 buttons.addEventListener("click", ()=>{
  const status = buttons.getAttribute("data-status");
  const newStatus =( status=="active"? "inactive":"active") ;
  const id = buttons.getAttribute("data-id");
  let newAction = path+`/${newStatus}/${id}?_method=PATCH`;
  console.log(newAction);
  formChange.setAttribute("action",newAction);
  formChange.submit();  
 })
})
//change multi-status 
// in the front-end
const checkboxMulti = document.querySelector("[check-box-multi]");
const checkAll = checkboxMulti.querySelector("input[name=checkall]");
const inputIds = checkboxMulti.querySelectorAll("input[name=id]");
checkAll.addEventListener("click", ()=>{
  if(checkAll.checked){
   inputIds.forEach((input)=>{
    input.checked=true;
   })
  }
  else{
   inputIds.forEach((input)=>{
  input.checked=false;
   })
  }
 inputIds.forEach((input)=>{
    input.addEventListener("click", ()=>{
        const countChecked = checkboxMulti.querySelectorAll("input[name=id]:checked");
       
        if(countChecked.length==inputIds.length){
            checkAll.checked = true;
        }
        else{
            checkAll.checked=false;
        }
    })
 })
 
  
})
//in the back-end
const formChangeMulti = document.querySelector("[form-change-multi]");
const manyIds = formChangeMulti.querySelector("input[name=ids]");

formChangeMulti.addEventListener("submit", (e)=>{
e.preventDefault();
const inputChecked= checkboxMulti.querySelectorAll("input[name=id]:checked");
if(inputChecked.length>0){
 let idArray= [];
 inputChecked.forEach((items)=>{
  idArray.push(items.value);
  

 })
 manyIds.value= idArray.join(", ");
 formChangeMulti.submit();
}

else{
    alert("Please select something!!")
}

})
//delete 
 const buttonDelete= document.querySelectorAll("[button-delete]");
 buttonDelete.forEach((button)=>{
    button.addEventListener("click", ()=>{
    const isConfirmed = confirm("Do you want to delete this product ???");
    if(isConfirmed){
        const id = button.getAttribute("data-id");
        const formDelete = document.querySelector("#form-delete");
        const path = formDelete.getAttribute("data-path");
        const action = `${path}/${id}?_method=DELETE`;
        formDelete.action = action;
        formDelete.submit();
    }
        
    })
 })