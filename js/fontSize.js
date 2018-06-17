var designWidth = 750;
var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
clientWidth = clientWidth > 750 ? 750 : clientWidth;
var body = document.documentElement || document.body;
body.style.fontSize=clientWidth/designWidth*100+'px';