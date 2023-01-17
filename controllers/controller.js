

const home= function(req, res, next) {
    res.render('index', { title: 'vyshnavi' });
  };

 const main=(req,res,next)=>{
    res.render("index",{title:"main"})
  }

 const log=(req,res,next)=>{
    res.render("login",{title:"userlogin",label:"username"})
  }

 const product=(req,res,next)=>{
    productData={name:"milma",manufaturing_date:"29/09/2001",price:22}
    res.render("product",{productData})
  
  }

  const user=(req,res,next)=>{
    const adrress1=[{name:"avan",age:21},{name:"vihal",age:20},{name:"soman",age:22}]
    res.render("userslist",{adrress1})
  }


  module.exports={
    home,main,log,product,user
  }