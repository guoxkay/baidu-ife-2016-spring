var main = (function(){
	var queue = [];
	return {
		leftInsert : function(num){//左侧入
			queue.unshift(num)
		},
		rightInsert : function(num){//右侧入
			queue.push(num)
		},
		leftDelete : function(){//左侧出
			queue.shift()
		},
		rightDelete : function(){//右侧出
			queue.pop()
		},
		del : function(num){//删除元素
			queue.splice(num,1)
		}
		displayQueue : function(){//显示队列
			
		}
	}
}())