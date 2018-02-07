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