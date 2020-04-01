const dbFile = "../data/Categories.json";
const imgFolder = "images/icons/cats/"
 
 fetchData().then( item => {
     showList(item)
     showFooterlinks(item)
    }).catch(err => {
        console.log(err)
 });

 function showList(cat_item)
 {
     let cat_list1 ="";

     Object.entries(cat_item).forEach(([index,e]) => {
         cat_list1 += `<a href="category.html?id=${e.id}" class="category_item"><img src="${imgFolder}${e.icon}" title="${e.name}" alt="${e.name}"><h1>${e.name}</h1><h3>${e.description}</h3></a>`
     });

    if (document.getElementById("lst_category") !== null) {
        document.getElementById("lst_category").innerHTML =cat_list1;
    }
 }

 function showFooterlinks(cat_item)
 {
    let cat_list2 =""; 
    Object.entries(cat_item).forEach(([index,e]) => {
        cat_list2 += `<li class="footer_item"><a href="category.html?id=${e.id}">${e.name}</a></li>`
    });
    document.getElementById("lst_footer_category").innerHTML =cat_list2;
 }



function fetchData()
{
    return new Promise((resolve,reject) => {
        fetch(dbFile)
        .then(response => {
            if (response.ok) {
            return response.json()
            }else {
            console.log("Unable to fetch the api")
            }
        })
        .then(function(data) {
           // return(data.Category)
           resolve(data.Category)
        })
        .catch(err => {console.error(err);});
    });
}
 


 