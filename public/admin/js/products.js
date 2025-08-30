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