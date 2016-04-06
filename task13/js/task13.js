var main = (function(){
	var queue = [];
	return {
		leftInsert : function(num){//左侧入
			if (main.isNumber(num)){
				queue.unshift(num);
				main.displayQueue();
			}
			event.preventDefault();
		},
		rightInsert : function(num){//右侧入
			if (main.isNumber(num)){
				queue.push(num);
				main.displayQueue();
			}
			event.preventDefault();
		},
		leftDelete : function(){//左侧出
			queue.shift();
			main.displayQueue();
			event.preventDefault();
		},
		rightDelete : function(){//右侧出
			queue.pop()
			main.displayQueue();
			event.preventDefault();
		},
		del : function(num){//删除元素
			queue.splice(num,1);
			main.displayQueue();
			event.preventDefault();
		},
		displayQueue : function(){//显示队列
			var container = document.getElementById("container");
			for (var i = 0;i < container)
			for (var i = 0;i < queue.length;i++){
				var newNode = document.createElement("div");
				container.appendChild(newNode);
				container.lastChild.setAttribute("id","num"+i);
				container.lastChild.textContent = queue[i];
				container.lastChild.addEventListener("click",function(){main.del(this.id)})
			}
		},
		isNumber : function(num){//合法检测
			if (isNaN(num)){
				alert("请输入数字");
				return false
			}
			else {
				return true
			}
		},
		getQueue : function(){
			return queue;
		}
	}
}())
document.getElementById("leftInsert").addEventListener("click",function(){main.leftInsert(document.getElementById("aaa").value)});
document.getElementById("rightInsert").addEventListener("click",function(){main.rightInsert(document.getElementById("aaa").value)});
document.getElementById("leftDelete").addEventListener("click",main.leftDelete);
document.getElementById("rightDelete").addEventListener("click",main.rightDelete);
main.displayQueue();