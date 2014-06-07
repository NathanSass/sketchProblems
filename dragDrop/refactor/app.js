
var source;

function dragStarted(evt){
	source = evt.target;
	evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
	evt.dataTransfer.effectAllowed = "move";
}

function draggingOver(evt){
	evt.preventDefault();
	evt.dataTransfer.dropEffect = "move";
}

function dropped(evt){
	evt.preventDefault();
	evt.stopPropagation();
	source.innerHTML = evt.target.innerHTML;
	evt.target.innerHTML = evt.dataTransfer.getData("text/plain");
}




function DraggableList(list){
	this.coolList = list;
};

DraggableList.prototype = {
	bindListeners: function(){
		$('.submit').click(this.addListItem.bind(this));
		$('.sort').click(this.sortListItems.bind(this));
		$('li').on('dragstart', function(e){
			e.target
			debugger
		})
	},
	
	addListItem: function(){
		event.preventDefault();
		var inputText = $('input').val();
		if(inputText.length > 1){
			this._buildListItem(inputText);
		};
	},
	
	_buildListItem: function(text){
		var template = $('#template').clone().html(text).removeAttr('id').show();
		$('ul').prepend(template)
	},

	sortListItems: function(){
		event.preventDefault();
		var listItems = $('ul li')
		listItems.sort(function(a, b){
			var liA = $(a).text();
		  var liB = $(b).text();

		  if (liA.toLowerCase() < liB.toLowerCase()) return -1;
	    if (liA.toLowerCase() > liB.toLowerCase()) return 1;
	    return 0;
		});
		
		$.each(listItems, function(i, li){
			$('ul').append(li)
		})
	}
	

}



$( document ).ready(function(){
	var myList = $('ul');
	var coolDragList = new DraggableList(myList);
	coolDragList.bindListeners();
});



