function DraggableList(list){
	this.coolList = list;
	this.source; // this is critical, it seems like I need this unless I want to nest listeners
};

DraggableList.prototype = {
	bindListeners: function(){
		$('.submit').click(this.addListItem.bind(this));
		$('.sort').click(this.sortListItems.bind(this));
		this._draggingListeners(this.coolList);
	},

	_draggingListeners: function(list){
		$(list).on('dragstart', 'li', this.dragStarted.bind(this)); //need to use a delegator since I may be adding elements
		$(list).on('dragover', 'li', this.dragOver.bind(this));
		$(list).on('drop', 'li', this.dropped.bind(this));
	},

	dragStarted: function(evt){
		this.source = evt.target;
		evt.originalEvent.dataTransfer.setData("text/plain", evt.target.innerHTML);
		evt.originalEvent.dataTransfer.effectAllowed = "move";
	},

	dragOver: function(evt){
		evt.originalEvent.preventDefault();
		evt.originalEvent.dataTransfer.dropEffect = "move";
	},

	dropped: function(evt){
		var text = this.innerHTML
		evt.originalEvent.preventDefault();
		evt.originalEvent.stopPropagation();
		this.source.innerHTML = evt.target.innerHTML; //source should be the one that started it
		evt.originalEvent.target.innerHTML = evt.originalEvent.dataTransfer.getData("text/plain");
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
	var coolDragList = new DraggableList($('ul'));
	coolDragList.bindListeners();
});
