// logic to get the permission from according roles
const tablePermission = document.querySelector("table");
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    let permission =[];
    const rows = tablePermission.querySelectorAll("[data-name]");
    rows.forEach((row)=>{
        const name = row.getAttribute("data-name");
        const inputs = row.querySelectorAll("input");
        if(name=="id"){
           inputs.forEach((input)=>{
            const id = input.value;
          permission.push({
            id:id,
            permissions:[]
          })

           })

        }
        else{
            inputs.forEach((input, index)=>{
                if(input.checked){
                   permission[index].permissions.push(name);
                }
              
            })
        }
    })
    
    if(permission.length>0){
        const formChange = document.getElementById("form-change-permission");
        const input = formChange.querySelector("input");
        input.value= JSON.stringify(permission);
        formChange.submit()
    }
})
// check box logic
const recordsHtml = document.querySelector("[data-records]");
const records = recordsHtml.getAttribute("data-records");
if(records){
const newRecords = JSON.parse(records);
newRecords.forEach((record, index)=>{
    const permissions = record.permissions;
    permissions.forEach((data)=>{
        const row = document.querySelector(`[data-name=${data}]`);
        const inputs= row.querySelectorAll("input");
        inputs[index].checked=true;
        
    })

    
})
}

