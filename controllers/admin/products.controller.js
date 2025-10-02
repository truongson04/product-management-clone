const Product = require("../../models/product.models");
//Display the list
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
  let searchingWord = "";
  if (req.query.keyword) {
    searchingWord = req.query.keyword;
    find.title = new RegExp(searchingWord, "i");
  }
  //pagination and position
  let pagination = {
    currentPage: 1,
    limit: 4,
  };
  if (req.query.page) {
    pagination.currentPage = parseInt(req.query.page);
  }
  pagination.skip = (pagination.currentPage - 1) * pagination.limit;
  const totalProducts = await Product.countDocuments(find);
  let totalPage = Math.ceil(totalProducts / pagination.limit);
  pagination.total = totalPage;
  const productList = await Product.find(find)
    .sort({position:"desc"})
    .limit(pagination.limit)
    .skip(pagination.skip);
  let fillterStatus = [
    {
      name: "Active",
      status: "active",
      class: "",
    },
    {
      name: "Inactive",
      status: "inactive",
      class: "",
    },
    {
      name: "All",
      status: "",
      class: "",
    },
  ];
  if (req.query.status) {
    const index = fillterStatus.findIndex(
      (items) => items.status == req.query.status
    );
    fillterStatus[index].class = "active";
  } else {
    const index = fillterStatus.findIndex((items) => items.status == "");
    fillterStatus[index].class = "active";
  }

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Product Management",
    products: productList,
    filterStatus: fillterStatus,
    inputValue: searchingWord,
    pagination: pagination,
  });
};
//change the status, change multi status and delete muli items
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const id = req.params.id;
  const pageNumber = req.params.page;
  await Product.updateOne({ _id: id }, { status: status });
  req.flash("success", "Update successfully")
  res.redirect(`/admin/products/?page=${pageNumber}`);
};
module.exports.changeMulti = async (req, res) => {
  const type = req.body.type;
  const ids = req.body.ids;
  const page = req.body.page;
  let arr = ids.split(", ");
  switch (type) {
    case "active":
      await Product.updateMany({ _id: { $in: arr } }, { status: "active" });
      break;
    case "inactive":
      await Product.updateMany({ _id: { $in: arr } }, { status: "inactive" });
      break;
    case "delete-all":
      await Product.updateMany(
        { _id: { $in: arr } },
        { deleted: true, deletedAt: new Date() }
      );
      break;
    case "change-position":
     for(const items of arr){
      let itemTransform = items.split("__");
      const id = itemTransform[0];
      const position= itemTransform[1];
      await Product.updateOne({_id: id}, {position: position})

     }
      break;
    default:
      break;
  }
  res.redirect(`/admin/products/?page=${page}`);
};
module.exports.deleteItem = async (req, res) => {
  const id = req.params.id;
  const page = req.params.page;
  await Product.updateOne(
    { _id: id },
    { deleted: true, deletedAt: new Date() }
  );
  res.redirect(`/admin/products?page=${page}`);
};
//create 
module.exports.createItem= (req, res)=>{
res.render("admin/pages/products/create.pug");
}
module.exports.createProducts= async(req, res)=>{

if(!req.body.position){
  const countProduct = await Product.countDocuments();
  req.body.position= countProduct+1;

}
req.body.price = parseFloat(req.body.price);
req.body.discount = parseFloat(req.body.discount);
req.body.number = parseFloat(req.body.number);
req.body.thumbnail= `/uploads/${req.file.filename}`;

const newProduct = new Product(req.body);
await newProduct.save();
res.redirect("/admin/products")



console.log(req.body);
res.send('ok');
}