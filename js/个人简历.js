// 轮播
var imgs=document.querySelectorAll('.banner .thumb ul li');
var points=document.querySelectorAll('.banner .point ul li');

var index=0;
function lunbo(){
	index++;
	if(index==imgs.length){index=0;}
	for(var c=0; c<imgs.length; c++){
		imgs[c].classList.remove('on');
		points[c].classList.remove('on');
	}
	imgs[index].classList.add('on');
	points[index].classList.add('on');
}
var timer=setInterval(lunbo,3000);

for(var d=0; d<imgs.length; d++){
	points[d].index=d;
	points[d].onmouseover=function(){
		index=this.index;
		clearInterval(timer);
		for(var k=0; k<points.length; k++){
			imgs[k].classList.remove('on');
			points[k].classList.remove('on');
		}
		imgs[index].classList.add('on');
		points[index].classList.add('on');
	}
	points[d].onmouseout=function(){
		timer=setInterval(lunbo,3000);
	}
}