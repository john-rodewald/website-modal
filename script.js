function redirect (route) {
    window.location.href = route;
}

function onClickJoinGroup () {
    const iframe = document.querySelector('#gid-iframe');

    iframe.setAttribute('src', iframe.getAttribute('data-src'));
};

if (window.addEventListener) {
    window.addEventListener("message", onMessage, false);
}

else if (window.attachEvent) {
    window.attachEvent("onmessage", onMessage, false);
}

function onMessage (event) {
    var data = event.data;
    if (typeof (window[data.func]) == "function") {
      window[data.func].call(null, data.message);
    }
}

// Function that gets called from iframe
function parentFunc (params) {
    onCompleteBLMFlow(params);
}

function storeTin (params) {
    onCompletePayPaulFlow(params);
}

function onCompleteBLMFlow (params) {
    redirect('blm-joined.html');
    document.cookie = `username=${params}`;
}

function onCompletePayPaulFlow (params) {
    redirect('paypaul-login.html');
    document.cookie = `tin=${params}`;
}

function getUserName () {
    const maybeUserName = readCookie('username');

    return maybeUserName ? maybeUserName : 'username';
}

function getTIN () {
    const maybeTIN = readCookie('tin');

    return maybeTIN ? maybeTIN : '123456789';
}

function readCookie (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
