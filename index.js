// index.js
window.onload = function(){

}


//footer底部的事件绑定

var footer = document.getElementsByTagName('footer')[0];
var list = footer.getElementsByTagName("li");
var wechat_list =document.getElementsByClassName("weixin-list")[0];
var contact_list =document.getElementsByClassName("contact-list")[0];
var discover_list =document.getElementsByClassName("discover-list")[0];
var me_list =document.getElementsByClassName("me-list")[0];
var arr = [wechat_list,contact_list,discover_list,me_list];


for(var i=0;i<list.length;i++){
	(function(i){
		return list[i].onclick=function(){
			var arrLi = ['<i class="icon icon-menu-00">微信</i>','<i class="icon icon-menu-01">微信</i>',
										'<i class="icon icon-menu-10">通讯录</i>','<i class="icon icon-menu-11">通讯录</i>',
										'<i class="icon icon-menu-20">发现</i>','<i class="icon icon-menu-21">发现</i>',
										'<i class="icon icon-menu-30">我</i>','<i class="icon icon-menu-31">我</i>'];
			display(i);

			for(j=0;j<list.length;j++){
					list[j].innerHTML = arrLi[2*j];
					list[j].style.color="#999";
			}
		}
	})(i)
}


function display(number){
	for(var i=0;i<arr.length;i++){
		arr[i].style.display = "none";
	}
	console.log(number);
	arr[number].style.display = "block";
}


// add 的事件绑定
var header = document.getElementsByTagName("header")[0];
var adds  = header.getElementsByClassName("adds")[0];
var menu = header.getElementsByClassName("menu")[0];

var timer = 0;
adds.onclick = function(){
	console.log("timer:"+timer);
	if(timer%2==0){
			menu.style.display = "block";
	}else{
			menu.style.display = "none";
	}
	timer++;
}


//



