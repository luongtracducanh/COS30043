/*
  Copyright (c) Total Validator.
  All Rights Reserved.
*/
(function () {
  //Pause to help when browser not already open
  setTimeout(send, 500);

  function send() {
    //Talk to TV app to get the starting page and options
    var req = new XMLHttpRequest(),
        port = "9889",
        index,
        index2;

    index = location.href.lastIndexOf("-");
    index2 = location.href.lastIndexOf(".");
    if (index != -1 && index2 != -1) port = location.href.substring(index+1, index2);

    req.open("GET", "http://127.0.0.1:" + port + "?url=url", true);
    req.onreadystatechange = function() {
      if (req.readyState != 4) { return; }
      try {
        if (req.status === 200) {
          if (req.responseText) {
            //Separate any manifest v3 options and send separately (in case talking to v2 extension)
            var options = req.responseText;
            var index = options.indexOf("|");
            var v3opts;
            if (index > 0) {
              v3opts = options.substring(index+1);
              options = options.substring(0, index);
            }
            window.postMessage({options: options, port: port, v3opts: v3opts}, '*' /* targetOrigin: any */);
          }
          else {
            alert("No response from the Total Validator application");
            location.href = "https://www.totalvalidator.com/help/extensions.html#issues";
          }
        }
        else if (req.status === 0) {
          alert("Could not contact the Total Validator application");
          location.href = "https://www.totalvalidator.com/help/extensions.html#issues";
        }
        else {
          alert("Could not contact the Total Validator application: " + req.status);
          location.href = "https://www.totalvalidator.com/help/extensions.html#issues";
        }
      } catch (e) {
        console.error(e);
        alert("Could not contact the Total Validator application (see console for more information)");
        location.href = "https://www.totalvalidator.com/help/extensions.html#issues";
      }
    };
    req.send();
  }
})();
