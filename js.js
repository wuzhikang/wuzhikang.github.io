//$().ready(function() {});//文档准备就绪
var x=[".main",".me",".skill",".experience",".callme"],
	y=["rgb(132,172,161)","rgb(15,140,130)","rgb(52,83,145)","rgb(145,90,74)","#a29971",];
var i=0;

var hover=function(){         
          $('span',this).fadeToggle('0.2s');
          $('div',this).fadeToggle('0.2s');	
          this.style.width = "2em";
          this.style.height = "2em";
          this.style.margin="0";
          $(this).children("img").css("width","1.5em");
    }
	,hover1=function(){
          $('span',this).fadeToggle('0.2s');
          $('div',this).fadeToggle('0.2s');
		var li=$(this).index();
		if(xx()!=li)
		{
          this.style.width = "1em";
          this.style.height = "1em";
          this.style.margin="0.5em";
          $(this).children("img").css("width","0");
         }
    }
	,xx=function(){//取得显示元素的class
		for(i=0;i<5;i++)
		{
		if($(x[i]).css("display")=="block")
		return i;
		}}
	,click=function(){
		
	var li=$(this).index();//第几个Li
	$(x[xx()]).slideToggle('0.5s');
    $(x[li]).slideToggle('0.5s', function(){$("body").css("background-color",y[li])});
    
          $('.sidebar li').css({"width":"1em","height":"1em","margin":"0.5em"});
          $('.sidebar li img').css("width","0");
          
          this.style.width = "2em";
          this.style.height = "2em";
          this.style.margin="0";
          $(this).children("img").css("width","1.5em");
          
          
	}

$(".sidebar li").click(click).hover(hover,hover1)
//=============================================================================
var bool=true;
var scrollFunc=function(e){//鼠标滚动事件
    e=e || window.event;
    if(bool){
//  	console.log(e.wheelDelta)
//  	console.log(e.detail)
    	bool=false;
		xx();
			if(e.wheelDelta<0)
			{
        $(x[i]).slideToggle('0.5s');
        if(i==4)i=-1;
    	$(x[i+1]).slideToggle('0.5s', function(){$("body").css("background-color",y[i+1])});
    	
    	$('.sidebar li').css({"width":"1em","height":"1em","margin":"0.5em"});
        $('.sidebar li img').css("width","0");
        var a=i+2
        $('.sidebar li:nth-child('+a+')').css({"width":"2em","height":"2em","margin":"0"});
        $('.sidebar li:nth-child('+a+') img').css("width","1.5em");
			}
			else{
        $(x[i]).slideToggle('0.5s');
        if(i==0)i=5;
    	$(x[i-1]).slideToggle('0.5s', function(){$("body").css("background-color",y[i-1])});
    	$('.sidebar li').css({"width":"1em","height":"1em","margin":"0.5em"});
        $('.sidebar li img').css("width","0");
        $('.sidebar li:nth-child('+i+')').css({"width":"2em","height":"2em","margin":"0"});
        $('.sidebar li:nth-child('+i+') img').css("width","1.5em");
			}
    	setTimeout(function(){bool=true}, 500);
    }

} 

/*注册事件*/ 
if(document.addEventListener){ 
    document.addEventListener('DOMMouseScroll',scrollFunc,false); 
}//W3C 
window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome
//=============================================================================
document.addEventListener('touchmove', function (event) {
		event.preventDefault();
		}, false);
		
touch.on("html",'swipeup',function(){
	var system ={};  
    var p = navigator.platform;       
    system.win = p.indexOf("Win") == 0;  
    system.mac = p.indexOf("Mac") == 0;  
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
    if(system.win||system.mac||system.xll){//如果是电脑跳转到百度  
        
    }else{
		xx();
        $(x[i]).slideToggle('0.5s');
        if(i==4)i=-1;
    	$(x[i+1]).slideToggle('0.5s', function(){$("body").css("background-color",y[i+1])});
    	
    	$('.sidebar li').css({"width":"1em","height":"1em","margin":"0.5em"});
        $('.sidebar li img').css("width","0");
        var a=i+2
        $('.sidebar li:nth-child('+a+')').css({"width":"2em","height":"2em","margin":"0"});
        $('.sidebar li:nth-child('+a+') img').css("width","1.5em");
	}})
touch.on("html",'swipedown',function(){
	var system ={};  
    var p = navigator.platform;       
    system.win = p.indexOf("Win") == 0;  
    system.mac = p.indexOf("Mac") == 0;  
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
    if(system.win||system.mac||system.xll){//如果是电脑跳转到百度  
        
    }else{
		xx();
	$(x[i]).slideToggle('0.5s');
        if(i==0)i=5;
    	$(x[i-1]).slideToggle('0.5s', function(){$("body").css("background-color",y[i-1])});
    	$('.sidebar li').css({"width":"1em","height":"1em","margin":"0.5em"});
        $('.sidebar li img').css("width","0");
        $('.sidebar li:nth-child('+i+')').css({"width":"2em","height":"2em","margin":"0"});
        $('.sidebar li:nth-child('+i+') img').css("width","1.5em");
	}})
//=============================================================================
function testClickBigCheckBox(){//中英文切换
	var t = document.getElementById('t');
	if(t.checked == true){
		document.getElementById("title").innerHTML="The more one know,the more he find himself ignorance.";
		document.getElementById("title").style.fontSize="large";
		document.getElementById("name").innerHTML="I am Wu Zhikang.";
		document.getElementById("occupation").innerHTML="A front-end R & D engineer";
		
		document.getElementById("callme-1").innerHTML="Contact Me"
		document.getElementById("callme-2").innerHTML="CODE"
		document.getElementById("callme-3").innerHTML="INSPIRATION"
		document.getElementById("callme-4").innerHTML="DREAM"
		document.getElementById("callme-5").innerHTML="FUTURE"
		document.getElementById("callme-6").innerHTML="Focus on efficiency, preference for agile development"
		document.getElementById("callme-7").innerHTML="Like to try, look forward to something new"
		document.getElementById("callme-8").innerHTML="Front is interested, interest is the future"
		document.getElementById("callme-9").innerHTML="Line road friends, is a shortcut"
		document.getElementById("callme-10").innerHTML="With me, see the bigger world together"
		}
	else{
		document.getElementById("title").innerHTML="懂得越多越知道自己的无知";
		document.getElementById("name").innerHTML="我叫吴志康";
		document.getElementById("occupation").innerHTML="一名前端工作者";
		
		document.getElementById("callme-1").innerHTML="联系我"
		document.getElementById("callme-2").innerHTML="代码"
		document.getElementById("callme-3").innerHTML="灵感"
		document.getElementById("callme-4").innerHTML="梦想"
		document.getElementById("callme-5").innerHTML="未来"
		document.getElementById("callme-6").innerHTML="注重效率,偏高敏捷开发"
		document.getElementById("callme-7").innerHTML="喜欢尝试,期待新鲜事物"
		document.getElementById("callme-8").innerHTML="前端即兴趣,兴趣即未来"
		document.getElementById("callme-9").innerHTML="行路有良友,便是捷径"
		document.getElementById("callme-10").innerHTML="带上我吧,一起去看更大的世界"
			}
}
//=============================================================================
function bf(){
 if(audio!==null){             
    //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
//   alert(audio.paused);
  if(audio.paused)                     {                 
      audio.play();//播放  
      
    interval = setInterval(function(){
    angle +=3;
    $('#k').rotate(angle);
	}, 40);
  }else{
  	audio.pause();//暂停
	clearInterval(interval);
  }
 } 
}


var angle = 0;
var audio = document.getElementById('music1'); 
var interval=setInterval(function(){
    angle +=3;
    $('#k').rotate(angle);
}, 40);

$(".song").hover(function(){
 if(audio!==null){
  if(audio.paused){
  	$('.song img:last-child').attr('src',"img/播放.png").fadeIn(0.2).css("left","2.8em");
     }else{
  	$('.song img:last-child').attr('src',"img/暂停.png").fadeIn(0.2).css("left","2.5em");
  }
 } 
},function(){
	$('.song img:last-child').fadeOut(0.2)
})