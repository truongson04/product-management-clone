const Product = require("../../models/product.models")
module.exports.index= async (req, res)=>{

    let find={};
    if(req.query.status){
        find.status = req.query.status
    }
    const productList = await Product.find(find);
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
        filterStatus: fillterStatus
    })
}