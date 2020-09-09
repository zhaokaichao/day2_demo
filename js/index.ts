 /*
        1．当内容为空时不能发布（25分）
        2．点击删除时可删除发布的内容（25分）
        3．字数随着用户的输入而变化（25分）
        4．最近发布的内容在上边显示（25）
        */
        //获取元素
        var btn:HTMLElement = document.getElementById('btn');
        var text:HTMLElement = document.getElementById('text');
        var ulis:HTMLElement = document.getElementById('ul');
        var num:HTMLElement = document.getElementById('num');
        //点击事件
        btn.onclick = function():void {
            //当内容为空时不能发布
            if (text['value']) {
                //创建节点
                var li = document.createElement('li');
                //设置内容
                li.innerHTML = `${text['value']}<button>删除</button>`;
                //追加节点  内容在上边显示
                ulis.insertBefore(li, ulis.firstChild);
                //删除节点  点击删除时可删除发布的内容
                li.lastElementChild['onclick'] = function() {
                    ulis.removeChild(li);
                }
            } else {
                alert('发布内容不能为空')
            }
        }

        //字数随着用户的输入而变化   140-输入的个数/ text.value.length = 剩余的

        text.oninput = function() {
            num.innerHTML = (140 - text['value'].length)+'';
        }