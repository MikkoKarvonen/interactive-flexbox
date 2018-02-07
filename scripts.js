var shapeList = [
	'<div class="firstShape"></div>',
    '<div class="secondShape"></div>',
    '<div class="thirdShape"></div>'
];

drawShapes = function(){
	document.getElementById('shapes').innerHTML = '';
	$.each( shapeList, function( key, value ) {
        document.getElementById('shapes').innerHTML += value;
    });
};

drawShapes();

addStyles = function(){
	var element = document.getElementById('shapes'),
    style = window.getComputedStyle(element),
    shapes_flex_direction = style.getPropertyValue('flex-direction'),
    shapes_flex_wrap = style.getPropertyValue('flex-wrap'),
    shapes_justify_content = style.getPropertyValue('justify-content'),
    shapes_align_items = style.getPropertyValue('align-items'),
    shapes_flex_flow = style.getPropertyValue('flex-flow');
	document.getElementById("flex_flow_style").innerHTML = shapes_flex_flow;
    document.getElementById("flex_wrap_style").innerHTML = shapes_flex_wrap;
    document.getElementById("flex_direction_style").innerHTML = shapes_flex_direction;
    document.getElementById("justify_content_style").innerHTML = shapes_justify_content;
    document.getElementById("align_items_style").innerHTML = shapes_align_items;
};

addStyles();

$(document).ready(function() {
    $('.flex-directions li button').click(function(e) {
        document.getElementById("shapes").style.flexDirection = this.textContent;
        addStyles();
    });
    $('.flex-wrap li button').click(function(e) {
        document.getElementById("shapes").style.flexWrap = this.textContent;
        addStyles();
    });
    $('.justify-content li button').click(function(e) {
        document.getElementById("shapes").style.justifyContent = this.textContent;
        addStyles();
    });
    $('.align-items li button').click(function(e) {
        document.getElementById("shapes").style.alignItems = this.textContent;
        addStyles();
    });
    $('.addShape').click(function(e) {
        if (shapeList.length == 3){
            shapeList.push('<div class="fourthShape"></div>');
            drawShapes();
        } else if (shapeList.length == 4) {
            shapeList.push('<div class="fifthShape"></div>');
            drawShapes();
        }
    });
    $('.deleteShape').click(function(e) {
        if (shapeList.length >= 4){
            shapeList.pop();
            drawShapes();
        }
    });
});