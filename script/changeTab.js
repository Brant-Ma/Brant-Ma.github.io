//用于index，M000，A000，N000页面
//下面一行会造成：只有第一次激活态会正常显示原title，后来的激活态title会变为undefined
//var content=document.getElementsByTagName("title").nodeValue;
var content=document.title
function changeTab(){
	if(!document.hidden){
		document.title=content;
		}else{
			document.title="(●––●) Hi, I'm Brant!";
		}
	}
document.addEventListener("visibilitychange", changeTab);