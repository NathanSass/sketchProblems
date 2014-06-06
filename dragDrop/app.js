
var source;

// el.addEventListener('dragOver',callback)
// just have a dragstart listener

function dragStarted(evt){
	//start drag
	source = evt.target;
	//set data
	evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
	//specify allowed transfer
	evt.dataTransfer.effectAllowed = "move";
}

function draggingOver(evt){
	//drag over
	evt.preventDefault();
	//specify operation
	evt.dataTransfer.dropEffect = "move";
}

function dropped(evt){
	//drop
	evt.preventDefault();
	evt.stopPropagation();
	//update text in dragged item
	source.innerHTML = evt.target.innerHTML;
	//update text in drop target
	evt.target.innerHTML = evt.dataTransfer.getData("text/plain");
}

function addListItem(){
	event.preventDefault();
	var inputText = $('input').val();
	if(inputText.length > 1){
		buildListItem(inputText);
	};
}

function buildListItem(text){
	var template = $('#template').clone().html(text).removeAttr('id').show();
	$('ul').prepend(template)
}

function sortListItems(){
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

function bindListeners(){
	$('.submit').click(addListItem);
	$('.sort').click(sortListItems);
};


$( document ).ready(function(){
	
	bindListeners();

});



