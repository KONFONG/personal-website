$(function(){
	var total=100;
	var createFire= [];
	
	fr o(var i=0;i<total;i++){
		createFire[i]=createFireworm();
	}
});

function createFireworm(){
	var fireworm=new Object();
	//把图像标签封装成为一个属性
	fireworm.element = $("<img src='img/1.jpg'>");
	
	fireworm.showPoint=function(){
		var x=Math.random()*($("div").width()-18);
		var y=Math.random()*($("div").height()-18);
		//创建一个对象，获取x y 轴的点
		var point={
			pointX : x,
			pointY : y
		}
		//返回对象，承接x y 值
		return point;
	}
	
	//封装函数：
	fireworm.show = function(){
		this.element.css({
			'top' : this.showPoint().pointY+'px',
			'left' : this.showPoint().pointX+'px'
		})
		$("#bg").append(this.element);
	}
	//调用函数：
	fireworm.show();
	
	//定义速度函数
	 fireworm.speed = function(){
	 	var speedTime=Math.round(Math.random()*10)*1000;
	 	return speedTime;  }
	//定义移动函数
	fireworm.move=function(){
		var _self = this;
		this.element.animate({
			"top":this.showPoint().pointY+'px',
			"left":this.showPoint().pointX+'px',
		},this.speed(),function(){
			_self.move();
		})
	}
	fireworm.move();
	}