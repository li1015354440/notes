    <ul>
      <li id="0">
        <span>999</span>
      </li>
      <li id="1">
        <div>666</div>
      </li>
      <li id="2">
        <div>
          <span>哈哈</span>
        </div>
      </li>
    </ul>
    
    布局就是以上的布局啦，要解决点击 li 中的任何元素都找到 li 并且获取 id 属性
    
    var oUl = document.getElementById("oUl");
    oUl.addEventListener("click", function(e) {
      var target = e.target;
      while(target != oUl ){
        if(target.nodeName == 'LI'){
           console.log(target.attributes.id.value);
           break;
         }
         target = target.parentNode;
      }
    })
