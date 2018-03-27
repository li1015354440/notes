H5、ios、android 混合开发交互方法
这里给大家讲解一下第三方工具 WebViewJavascriptBridge
1.首先 和 ios 交互：

    <script>
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
    </script>
   
重点来了：
