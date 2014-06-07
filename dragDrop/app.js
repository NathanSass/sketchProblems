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