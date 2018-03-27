
这里给大家讲解一下第三方工具 WebViewJavascriptBridge

1.首先 和 ios 交互：

下面这个方法是固定方法，可直接复制粘贴

		function setupWebViewJavascriptBridge(callback) {
			if(window.WebViewJavascriptBridge) {
				return callback(WebViewJavascriptBridge);
			}
			if(window.WVJBCallbacks) {
				return window.WVJBCallbacks.push(callback);
			}
			window.WVJBCallbacks = [callback];
			var WVJBIframe = document.createElement('iframe');
			WVJBIframe.style.display = 'none';
			WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
			document.documentElement.appendChild(WVJBIframe);
			setTimeout(function() {
				document.documentElement.removeChild(WVJBIframe)
			}, 0)
		}
   
重点来了，如何调用上面的方法：

		setupWebViewJavascriptBridge(function(bridge) {
			bridge.callHandler('getUserId', function(response) { //js调用oc方法 参数为oc提供的方法名
			    window.localStorage.setItem('userId',response.userId); //用来储存返回值（有的话）
			})
			bridge.registerHandler('userIdCall', function(data,res) { //oc调用js方法，res 为回掉函数，可以没有
				window.localStorage.setItem('data',data);
				res("ok"); //ios 端可以看到
			})
		})
		
2.接下来和android交互：

		var userId = bridge.userId(data); //bridge是android提供的对象名，userId是方法名，data为参数（需要就加）
	
andriod 交互相对简单一些。		
		
推荐文章：https://www.jianshu.com/p/e37ccf32cb5b
		
		
		
		
		
		
