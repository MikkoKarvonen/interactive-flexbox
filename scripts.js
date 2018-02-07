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
});