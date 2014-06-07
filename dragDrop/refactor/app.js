function DraggableList(list){
	this.coolList = list;
	this.source; // this is critical, it seems like I need this unless I want to nest listeners
};

DraggableList.prototype = {
	bindListeners: function(){
		$('.submit').click(this.addListItem.bind(this));
		$('.sort').click(this.sortListItems.bind(this));
		$('li').on('dragstart', this.dragStarted.bind(this));
		$('li').on('dragover', this.dragOver.bind(this));
		$('li').on('drop', this.dropped.bind(this));
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
		// debugger
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
		$(template).on('dragstart', this.dragStarted.bind(this));
		$(template).on('dragover', this.dragOver.bind(this));
		$(template).on('drop', this.dropped.bind(this));
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
