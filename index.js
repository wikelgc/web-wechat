// index.js
window.onload = function(){

}


var footer = document.getElementsByTagName('footer')[0];
var list = footer.getElementsByTagName("li");
var wechat_list =document.getElementsByClassName("weixin-list")[0];
var contact_list =document.getElementsByClassName("contact-list")[0];
var discover_list =document.getElementsByClassName("discover-list")[0];
var me_list =document.getElementsByClassName("me-list")[0];
var arr = [wechat_list,contact_list,discover_list,me_list];

// for(var i=0;i<list.length;i++){
// 	(list[i].onclick = function(){
// 		// arr[i].style.display =back;
// 		console.log(this);
// 	})(i)
// }

// footer的事件绑定
// for(var i=0;i<list.length;i++){

// 	if(i==0){
// 		list[0].onclick = function(){
// 			display(0);
// 			console.log(0);
// 		};
// 	}

// 	if(i==1){
// 		list[1].onclick = function(){
// 			display(1);
// 			console.log(1);
// 		};
// 	}

// 	if(i==2){
// 		list[2].onclick = function(){
// 			display(2);
// 			console.log(2);
// 		};
// 	}

// 	if(i==3){
// 		list[3].onclick = function(){
// 			display(3);
// 			console.log(3);
// 		};
// 	}
// 	console.log(i);

// }

//闭包
for(var i=0;i<list.length;i++){
	(function(i){
			return {
				list[i].onclick = function(){
					display(i);
				}
			}

	})(i)
}


// list[1].onclick = function(1)

function display(number){
	for(var i=0;i<arr.length;i++){
		arr[i].style.display = "none";
	}
	// console.log(number);
	arr[number].style.display = "block";
}


// add 的事件绑定

var header = document.getElementsByTagName("header")[0];
var adds  = header.getElementsByClassName("adds")[0];
var menu = header.getElementsByClassName("menu")[0];

var timer = 0;
adds.onclick = function(){
	// console.log(15);
	// timer++;
	if(timer%2==0){
			menu.style.display = "block";
	}else{
			menu.style.display = "none";
	}
	timer++;
}





