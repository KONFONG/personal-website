//工厂模式
$(function() {
	var total = 100;
	var fireworm = [];

	for (var i = 0; i < total; i++) {
		fireworm[i] = createObject();
//		fireworm[i].show();
//		fireworm[i].run();
	}
});

function createObject(){
	fireworm = new Object();
	fireworm.element = $('<img src="img/1.jpg"/>');
	
	fireworm.showPoint = function(){
		var x = Math.random()*($("#bg").width()-18);
		var y = Math.random()*($("#bg").height()-18);
		var point = {
			pointX:x,
			pointY:y
		};
		return point;
	}
	
	fireworm.show = function(){
		this.element.css({
			"left":this.showPoint().pointX+"px",
			"top":this.showPoint().pointY+"px"
		})
		$("#bg").append(this.element);
	}
	
	fireworm.speed = function(){
		var speedRunTime = Math.round(Math.random() * 10 + 5)*1000+1000;
		return speedRunTime;
	}
	
	fireworm.run = function(){
		var _self = this;
		this.element.animate({
			left:this.showPoint().pointX+"px",
			top:this.showPoint().pointY+"px"
		},this.speed(),function(){
			_self.run();
		})
	}
	fireworm.show();
	fireworm.run();
	return fireworm;
}

function fly() {
	fireworm = new Object();
	/*function creatFire(){
		var img  = document.createElement("img");
		img.setAttribute("src","img/1.jpg");
		return img;
	}*/
	fireworm.element = $('<img src="img/1.jpg"/>');

	fireworm.point = {
		pointX: 100,
		pointY: 100
	}
	fireworm.showPoint = function() {
		var x = Math.random() * ($("div").width() - 18);
		var y = Math.random() * ($("div").height() - 18);
		var point = {
			pointX: x,
			pointY: y
		}
		return point;
	}

	fireworm.show = function() {
		this.element.css({
			"top": this.showPoint().pointY + "px",
			"left": this.showPoint().pointX + "px"
		});
		$("div").append(this.element);
	}
	fireworm.speed = function() {
		var speedRunTime = Math.round(Math.random() * 10 + 5) * 1000;
		return speedRunTime;
	}

	fireworm.move = function() {
		var _self = this;
		this.element.animate({
			"top": this.showPoint().pointY + "px",
			"left": this.showPoint().pointX + "px"
		}, this.speed(), function() {
			_self.move();
		});
	}
	return fireworm;
}