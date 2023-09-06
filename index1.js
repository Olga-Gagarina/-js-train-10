const  article ={
    info :{
            id : 105423,
    title : `My article`,
    description : ` This info about my stupid life `,
    categoryId : 1423,
    likeAmount : 442,
},

};
const  articleFild ={
    id : "ID news",
    title : `My title start`,
    description : ` This info about my stupid  long life `,
    categoryId : 1433,
    likeAmount : 443,

};
articlePhoto = {
  
    photoUrl : `...url`,
    photoId : 100,
    photoType : "big",
};
articleCommentList = {
 list : [{id : 4323, user : "Ivan",  message : " COOL!!!"}]
};
Object.assign(article, articlePhoto, articleCommentList);
const returnedTarget = Object.assign(article, articlePhoto, articleCommentList);
//  console.log( article);
//  console.log( returnedTarget === article);

// console.log(Object.entries(article.info));

const formList = Object.entries(article.info);
   const resultFormList =  formList.map(([key, value]) => {
// return `${articleFild[key]} : ${value}`;
return ` <p> <h1> ${articleFild[key]}</h1> : ${value} </p>`;
});
// console.log(resultFormList);

const objArr = [
    [`id`, 10001],
    [`title`, `my life`],
    [`description`,  ` stupid`]
];

























// console.log(Object.fromEntries(objArr));
// console.log(article.hasOwnProperty("info"));
// console.log(article.propertyIsEnumerable("id"));
// Object.freeze(article);
Object.preventExtensions(article);
// article.info.title = "hellow!";
// console.log(article.info.title);
// delete article.title;
// console.log(article.title);
// console.log( Object.isFrozen(article));
// console.log( Object.isExtensible(article));

console.log(Object.keys(article));
console.log(Object.values(article));
