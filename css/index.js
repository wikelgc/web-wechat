// index.js
window.onload = function(){

}


var footer = document.getElementsByTagName('footer')[0];
var list = footer.getElementsByTagName("li");



var wechat_list =document.getElementsByClassName("weixin-list")[0];
var contact_list =document.getElementsByClassName("weixin-list")[0];
var discover_list =document.getElementsByClassName("weixin-list")[0];
var me_list =document.getElementsByClassName("me-list")[0];

var arr = [wechat_list,contact_list,discover_list,w]

for(var i=0;i<list.length;i++){
	(list[i].onclick = function(){
		// arr[i].style.display =back;
		console.log(i);
	})(i)
}
