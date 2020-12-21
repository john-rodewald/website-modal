const onClickJoinGroup = () => {
    const iframe = document.querySelector('#gid-iframe');

    iframe.setAttribute('src', iframe.getAttribute('data-src'));
};

if (window.addEventListener) {
  window.addEventListener("message", onMessage, false);
}

else if (window.attachEvent) {
  window.attachEvent("onmessage", onMessage, false);
}

function onMessage(event) {
  var data = event.data;
  if (typeof (window[data.func]) == "function") {
    window[data.func].call(null, data.message);
  }
}

// Function to be called from iframe
function parentFunc(message) {
  alert(message);
}
