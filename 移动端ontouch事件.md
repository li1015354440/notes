http://blog.sina.com.cn/s/blog_65c2ec5e0101fexw.html

处理Touch事件能让你跟踪用户的每一根手指的位置。你可以绑定以下四种Touch事件：
    1.touchstart:  // 手指放到屏幕上的时候触发 
    2.touchmove:  // 手指在屏幕上移动的时候触发 
    3.touchend:  // 手指从屏幕上拿起的时候触发 
    4touchcancel:  // 系统取消touch事件的时候触发。至于系统什么时候会取消，不详
属性
    1.client / clientY：// 触摸点相对于浏览器窗口viewport的位置 
    2.pageX / pageY：// 触摸点相对于页面的位置 
    3.screenX /screenY：// 触摸点相对于屏幕的位置 
    4.identifier： // touch对象的unique ID 
//touchstart事件  
function touchSatrtFunc(e) {  
    //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
    var touch = e.touches[0]; //获取第一个触点  
    var x = Number(touch.pageX); //页面触点X坐标  
    var y = Number(touch.pageY); //页面触点Y坐标  
    //记录触点初始位置  
    startX = x;  
    startY = y;  
}  
//touchmove事件 
function touchMoveFunc(e) {  
    //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
    var touch = evt.touches[0]; //获取第一个触点  
    var x = Number(touch.pageX); //页面触点X坐标  
    var y = Number(touch.pageY); //页面触点Y坐标  
    var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';  
    //判断滑动方向  
    if (x - startX != 0) {  
        //左右滑动  
    }  
    if (y - startY != 0) {  
        //上下滑动  
    }  
}  
