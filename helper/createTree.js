let count=1;
function createTree (arr, parentId=""){
       let tree=[];
        arr.forEach((items)=>{
            if(items.parent_id==parentId){
                const newItem = items;
                count++;
                newItem.number=count;
                const children = createTree(arr, items.id);
            if(children.length>0){
                newItem.children=children;
            }
            tree.push(newItem)
            }

        })
        return tree;
}
module.exports.createTree= (arr, parentId="")=>{
        count=0;
       let tree=[];
        arr.forEach((items)=>{
            if(items.parent_id==parentId){
                const newItem = items;
                const children = createTree(arr, items.id);
            if(children.length>0){
                newItem.children=children;
            }
            tree.push(newItem)
            }

        })
        return tree;

}