//1
var sumOfItems=document.getElementById('sumOfItems');
var totalCost=document.getElementById('totalCost')
sumOfItems.innerHTML="0";
totalCost.innerHTML="0";
   function ProductsCatalog(elem) {
    elem.onclick = function(e) {
      var target = e.target;
    //  console.log(target.tagName);
       if (target.tagName != 'BUTTON'){
        	return;
        };
        var price= parseInt(target.parentElement.querySelector("P").innerHTML);
     	var qty=target.parentElement.querySelector("input").value;

     	if (qty<1){
     		qty=1;
     	}else{
     		price=qty*price;
			qty=parseInt(qty);
     	}
	totalCost.innerHTML=parseInt(totalCost.innerHTML)+price;
	sumOfItems.innerHTML=parseInt(sumOfItems.innerHTML)+qty;

    };
  }

  new ProductsCatalog(productsCatalog);

//2
var filterPrice=document.getElementById('filterPrice');
var filterCategory=document.getElementById('filterCategory');
function sort(filterPrice,filterCategory){
var filterPrice=filterPrice.value;
var filterCategory=filterCategory.value;
items =document.getElementsByClassName('product-box__item');

   for(var i=0;i<items.length;i++){
    	items[i].style.display = "none";

 };
switch (filterCategory) {
  case '0':
  		for(var i=0;i<items.length;i++){
		items[i].style.display = "block";
	 	 };

    break;
  case '1':
    for(var i=0;i<items.length;i++){
		 if(items[i].id=='zavtrak'){
		 	items[i].style.display = "block";
		 }
	  };
    break;
  case '2':
         for(var i=0;i<items.length;i++){
		 if(items[i].id=='pervoe'){
		 	items[i].style.display = "block";
		 }
	  };
    break;
    case '3':
        for(var i=0;i<items.length;i++){
		 if(items[i].id=='garnir'){
		 	items[i].style.display = "block";
		 }
	  };
    break;
  default:
    console.log("err filterPrice");
    break;
}


 for(var i=0;i<items.length;i++){
   if(parseInt(items[i].querySelector("P").innerHTML)<filterPrice){
   	items[i].style.display = "none";
   }
 };
}

 filterPrice.onchange = function() {
sort(filterPrice,filterCategory);
    }
 	
 filterCategory.onchange = function() {
sort(filterPrice,filterCategory);
    }

//3

var placeOrder=document.getElementById('placeOrder');
var modalForm = document.createElement('div');
modalForm.className = "modalForm";
modalForm.innerHTML = '<form><input type="text" placeholder="Имя" id="name" maxlength="30"><br><input placeholder="email" id="email" type="email" maxlength="30"><br><input id="order" type="button" value="Отправить"></form>';
document.querySelector("BODY").appendChild(modalForm);
placeOrder.onclick=function(){
modalForm.style.display = "block";
}
window.onclick = function(event){
	if (event.target == modalForm){
		modalForm.style.display = "none";
	}
}
modalForm.querySelector("#order").onclick=function(){
	var name = modalForm.querySelector("#name").value;
	name = name.replace(/\s/g, '');
	var email = modalForm.querySelector("#email").value;
	email  = email .replace(/\s/g, '');
	if (name.length>0 && email.length>0){
alert('Благодарим за покупки');
modalForm.style.display = "none";
sumOfItems.innerHTML="0";
totalCost.innerHTML="0";
}else{
	alert('Поля не заполнены');
}
}

//document.querySelector("BODY").innerHTML = "5:00";
//document.createElement('div');