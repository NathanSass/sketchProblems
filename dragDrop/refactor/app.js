function DraggableList(list){
	this.coolList = list;                                                      // I could have taken passing in DOM elements further.
	this.source;                                                               // I can use this scoped variable or I could 
};                                                                           // have nested listeners.                                

DraggableList.prototype = {
	bindListeners: function(){
		$('.submit').click(this.addListItem.bind(this));
		$('.sort').click(this.sortListItems.bind(this));                     
		$(this.coolList).on('dragstart', 'li', this.dragStarted.bind(this));     //need to use a delegator since I will be adding li elements
		$(this.coolList).on('dragover', 'li', this.dragOver.bind(this));
		$(this.coolList).on('drop', 'li', this.dropped.bind(this));
	},
	
	dragStarted: function(evt){
		this.source = evt.target;                                                // I need to refrence this in later click events
		evt.originalEvent.dataTransfer.setData("text/plain", evt.target.innerHTML);
		evt.originalEvent.dataTransfer.effectAllowed = "move";
	},

	dragOver: function(evt){
		evt.originalEvent.preventDefault();
		evt.originalEvent.dataTransfer.dropEffect = "move";
	},

	dropped: function(evt){
		evt.originalEvent.preventDefault();
		evt.originalEvent.stopPropagation();
		this.source.innerHTML = evt.target.innerHTML;              
		evt.originalEvent.target.innerHTML = evt.originalEvent.dataTransfer.getData("text/plain");
	},

	addListItem: function(){
		event.preventDefault();
		var inputText = $('input').val();                                         // grabs user input from DOM
		if(inputText.length >= 1){                                                // avoids building empty li items                           
			this._buildListItem(inputText);         
		};
	},
	
	_buildListItem: function(text){
		var template = $('#template').clone().html(text).removeAttr('id').show(); // grabs the template which is already on the DOM,
		$('ul').prepend(template);                                                // replicates it then appends it.
	},

	sortListItems: function(){                                                  // I needed to make a function that takes into
		event.preventDefault();                                                   // account the case of the letters but still preserves
		var listItems = $('ul li')                                                // the case of the user input.             
		listItems.sort(function(a, b){                                                     
			var liA = $(a).text();
		  var liB = $(b).text();

		  if (liA.toLowerCase() < liB.toLowerCase()) return -1;
	    if (liA.toLowerCase() > liB.toLowerCase()) return 1;
	    return 0;
		});
		
		$.each(listItems, function(i, li){                                         // re appends to ellements in alphabetic order.
			$('ul').append(li)
		})
	}
	
}



$( document ).ready(function(){                                               // I could have passed in all of the dom elements so it would
	var myList = $('ul');                                                       // have been really easy to change class names in the html without
	var coolDragList = new DraggableList($('ul'));                              // affecting the js. 
	coolDragList.bindListeners();
});
