const Product = require("../../models/product.models")
//Display the list 
module.exports.index= async (req, res)=>{

    let find={

    };
    if(req.query.status){
        find.status = req.query.status
    }
    let searchingWord="";
    if(req.query.keyword){
      searchingWord= req.query.keyword;
    find.title= new RegExp(searchingWord, "i")
}
//pagination
let pagination = {
  currentPage :1, 
  limit : 4
}
if(req.query.page){
  pagination.currentPage= parseInt(req.query.page);
}
pagination.skip= (pagination.currentPage-1)*pagination.limit;
const totalProducts = await Product.countDocuments(find);
let totalPage = Math.ceil(totalProducts/pagination.limit);
pagination.total = totalPage; 
    const productList = await Product.find(find).limit(pagination.limit).skip(pagination.skip);
  let fillterStatus = [{
    name:"Active",
    status:"active",
    class:""
  }, 
  {
    name:"Inactive",
    status:"inactive",
    class:""
  },
  {
    name:"All",
    status:"",
    class:""
  }
]
if(req.query.status){
    const index = fillterStatus.findIndex((items)=>items.status==req.query.status);
    fillterStatus[index].class="active"
}
else{
    const index = fillterStatus.findIndex((items)=>items.status=="");
    fillterStatus[index].class="active"
}


    
    res.render( "admin/pages/products/index.pug", {
        pageTitle: "Product Management",
        products : productList,
        filterStatus: fillterStatus,
       inputValue :searchingWord,
       pagination:pagination
       
    })
}
//change the status 
module.exports.changeStatus= async(req, res)=>{
 const status = req.params.status;
 const id = req.params.id;
 const pageNumber = req.params.page;
 await Product.updateOne({_id: id}, {status: status});
  res.redirect(`/admin/products/?page=${pageNumber}`);
}