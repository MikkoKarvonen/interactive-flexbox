$(document).ready(function() {
    $('.flex-directions li button').click(function(e) {
      document.getElementById("shapes").style.flexDirection = this.textContent;
      addStyles();
    });
});