(function(){
	var btn=document.getElementById("myBtn");
	var input=document.getElementById("myInput");
	var lists = {
		todo:document.getElementById("todo"),
		done:document.getElementById("done")
	}
	var createChild = function(str,oncheck){
		var newElement = document.createElement("li");
		var inp =document.createElement("input");
		inp.type="checkbox";
		inp.addEventListener('click', oncheck)
		var data = document.createTextNode(str);
		newElement.appendChild(inp);
		newElement.appendChild(data);
		return newElement;
	};
	var addChild = function(list,element){
		list.appendChild(element);
	};
	var oncheck = function(event){
		var node = event.target.parentElement;
		var parent = node.parentElement.id;
		lists[parent === 'todo' ? 'done':'todo'].appendChild(node); 
		input.focus();
	};
	btn.addEventListener('click', function(){
		if(input.value.length > 0){
			addChild(lists.todo,createChild(input.value,oncheck));
			input.value='';
			input.focus();	
		}
	})
})();