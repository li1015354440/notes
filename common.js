var common={
		// 服务器前缀
		api:'http://baidu.com/',
		// 点击onBtn清空clearVal的值
		/**
		 * onBtn传点击按钮 clearVal传要清空的元素
		 */
		clickClear:function(onBtn,clearVal){
			$(onBtn).on('click',function(){clearVal.val("")});
		},
		// 判断手机系统类型
		isAI:function(){
			var u = navigator.userAgent;
			console.log(u);
			if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {// 安卓手机
				// console.log("安卓手机");
				return "安卓手机";
			// window.location.href = "mobile/index.html";
			} else if (u.indexOf('iPhone') > -1) {// 苹果手机
			// window.location.href = "mobile/index.html";
				// console.log("苹果手机");
				return "苹果手机";
			} else if (u.indexOf('Windows Phone') > -1) {// winphone手机
				console.log("winphone手机");
			// window.location.href = "mobile/index.html";
				return "winphone手机" ;
			}
			
		},
		/***********************************************************************
		 * byclassName兼容方法 oparent 要获取子集class的父级id sName 要获取的class名
		 **********************************************************************/
		getByClass:function(oparent,sName)
		{
			var aChild=oparent.getElementsByTagName('*');	
			var arr=[];
			for(var i=0;i<aChild.length;i++)
			{
				var oChild=aChild[i];
				if(findInArr(oChild.className.split(' '),sName))
				{
					arr.push(oChild);	
				}	
			}
			return arr;
			function findInArr(arr,value)
			{
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i]==value)
					{
						return true;	
					}	
				}
				return false;
			};
		},
		/*
		 * obj运动的元素 json运动是属性 options 运动时间 运动方式 运动后回调json
		 * move(aDiv,{marginRight:500,marginTop:10,opacity:.3},{
		 * duration:1000,easing:Tween.Back.easeInOut})
		 */
		move:function(obj, json, options){
			// t 当前时间 b初始值 c总距离 d总时间
			var Tween={Linear:function(t,b,c,d){return c*t/d+b},Quad:{easeIn:function(t,b,c,d){return c*(t/=d)*t+b},easeOut:function(t,b,c,d){return -c*(t/=d)*(t-2)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b}return -c/2*((--t)*(t-2)-1)+b}},Cubic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b}return c/2*((t-=2)*t*t+2)+b}},Quart:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t+b},easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b}return -c/2*((t-=2)*t*t*t-2)+b}},Quint:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b}return c/2*((t-=2)*t*t*t*t+2)+b}},Sine:{easeIn:function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b},easeOut:function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOut:function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b}},Expo:{easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOut:function(t,b,c,d){if(t==0){return b}if(t==d){return b+c}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b}return c/2*(-Math.pow(2,-10*--t)+2)+b}},Circ:{easeIn:function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOut:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return -c/2*(Math.sqrt(1-t*t)-1)+b}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b}},Elastic:{easeIn:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b)},easeInOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d/2)==2){return b+c}if(!p){p=d*(0.3*1.5)}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b}},Back:{easeIn:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*(t/=d)*t*((s+1)*t-s)+b},easeOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b}return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b}},Bounce:{easeIn:function(t,b,c,d){return c-Tween.Bounce.easeOut(d-t,0,c,d)+b},easeOut:function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b}}}},easeInOut:function(t,b,c,d){if(t<d/2){return Tween.Bounce.easeIn(t*2,0,c,d)*0.5+b}else{return Tween.Bounce.easeOut(t*2-d,0,c,d)*0.5+c*0.5+b}}}};
			// 默认值
			options=options || {};
			options.duration=options.duration || 300;
			options.easing=options.easing || Tween.Linear;
			
			var start={};// 初始位置
			var dis={};// 运动距离（目标位置-初始位置）
			
			for (var name in json)
			{
				start[name]=parseFloat(getStyle(obj, name));
				dis[name]=json[name]-start[name];
			}
			
			var count=Math.floor(options.duration/30);
			var n=0;
			
			clearInterval(obj.timer);
			obj.timer=setInterval(function (){
				n++;
				
				for (var name in json)
				{
					var cur=options.easing(options.duration*n/count, start[name], dis[name], options.duration);
					
					if (name == 'opacity')
					{
						obj.style[name]=cur;
					}
					else
					{
						obj.style[name]=cur+'px';
					}
				}
				
				if (n == count)
				{
					clearInterval(obj.timer);
					options.complete && options.complete();
				}
			}, 30);
		},
		/**
		 * 获取行间样式的方法 currentStyle 兼容IE系列 getComputedStyle(obj, false) 高版本 @ obj
		 * 需要获取样式的对象 @ name css属性名称
		 */
		getStyle:function (obj, name)
		{
			return (obj.currentStyle || getComputedStyle(obj, false))[name];
		},
		/***************************************************************************
		 * 处理字符串获取数据 字符格式必须是?a=12&f=8
		 **************************************************************************/
		StrToJOON:function (str){
			str = str || window.location.search;
			var arr=[];
			var jsonData={};
			if(str.indexOf('?')!=-1)
			{
				arr=str.substr(str.indexOf('?')+1).split('&');
				for(var i=0;i<arr.length;i++)
				{
					jsonData[arr[i].split('=')[0]]=arr[i].split('=')[1];
				}
				return jsonData;
			}else{
				console.log('输入的字符串有错！字符格式必须是?a=12&f=8')
			}
		},
		/***************************************************************************
		 * 加密 str字符串 原理把字符每个字符加密然后存到arr
		 **************************************************************************/
		cca:function(str){
			var arr=[];
			for(var i=0;i<str.length;i++)
			{
				arr.push(str.charCodeAt(i)+888);
			}
			return arr;
		},
		/***************************************************************************
		 * 解密 str传加密后的字符串 字符串格式'23698,21150,23698' 原理把加密后的str转成数组然后转成需要的字符串
		 **************************************************************************/
		fcc:function(str)
		{
			if(str!=null)
			{
				var strVal='';
				var arr=str.split(',');
				for(var i=0;i<arr.length;i++)
				{
					strVal+=String.fromCharCode(arr[i]-888);
				}
				return strVal;
			}else{
				console.log('请输入字符串！');
			};
		},
		/***************************************************************************
		 * 生成n-m的随机数
		 **************************************************************************/
		rd:function(n,m){
			return Math.floor(Math.random()*(m-n)+n);
		},
		/***************************************************************************
		 * ***从初始数到结束数 的数字滚动 *** domObj 要操作的元素 json:{starNum,callbackTime,endNum，fn}
		 * starNum 初始值 (选填) callackTime 回调时间(选填) endNum 最终值(必填) fn 选填
		 **************************************************************************/
		CountStop:function(domObj,json){
			json.starNum=json.starNum || 1;
			json.callbackTime=json.callbackTime || 20;
			var timer=setInterval(function(){
				json.starNum++;
				domObj.innerHTML=json.starNum;
				if(json.starNum==json.endNum)
				{
					clearInterval(timer);
					json.fn && json.fn();
				}
			},json.callbackTime);
		},
		/***************************************************************************
		 * 身份证验证 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 返回1验证通过
		 **************************************************************************/
		isCardNo:function (card)  
		{   
		   var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
		   if(reg.test(card) === true)  
		   {     
		       return  1;  
		   }else{
		   		console.log("请输入正确身份证号！");
		   		return 0;
		   }
		},
		/**
		 * 手机号验证 返回1验证通过   增加173号段
		 */
		isPhoneNum:function(phone){
			var reg=/^1[3456789]\d{9}$/;
			if(reg.test(phone)===false)
			{
				console.log("请输入正确手机号！");
				return 0;
			}else{
				return 1;
			}
		},
		/**
		 * 电话号码验证
		 */
		isTel:function(phone){
			return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
		},
		/**
		 * 姓名认证 返回1验证通过
		 */
		isUNameStr:function(str){
			var reg=/^[\u4E00-\u9FA5]{2,10}$/;
			if(reg.test(str)===false)
			{
				console.log("请输入您的姓名！");
				return 0;
			}else{
				return 1;
			}
		},
		/**
		 * 银行卡号验证 返回1验证通过
		 */
		isBankCard:function(num){
			var reg = /^(\d{16}|\d{19})$/;
			if(reg.test(num)===false)
			{
				console.log("请输入您的姓名！");
				return 0;
			}else{
				return 1;
			}
		},
		/***************************************************************************
		 * 从某年到当前年份 starYear 开始年份
		 **************************************************************************/
		allYear:function(starYear){
			starYear=starYear || 2010;
			var year=new Date().getUTCFullYear();// 获取当前年份
			var yArr=[];
			for(var i=starYear;i<=year;i++)
			{
				yArr.push(i);
			}
			return yArr.sort(function(a,b){return b-a});
		},
		/**
		 * 日期格式化 dateTime 时间戳 return 2010-10-20 10:00:00
		 */
		parseDateTime:function(dateTime){
			return new Date(parseInt(dateTime)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "); 
		},
		// 判断是否是微信浏览器
		isWeixinBrowser:function (){
			var ua = window.navigator.userAgent.toLowerCase();
			return (/micromessenger/.test(ua)) ? true : false;
		},
		// 判断是否是qq浏览器
		isQQBrowser:function() {
			var ua = window.navigator.userAgent.toLowerCase();
			return (ua.match(/QQ/i) == "qq") ? true : false;
		},
		//获取url中的参数
		getUrlParam:function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg); //匹配目标参数
			if (r != null) return unescape(r[2]); return null; //返回参数值
		}
};