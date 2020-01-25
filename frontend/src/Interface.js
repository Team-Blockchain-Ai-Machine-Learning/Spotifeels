var backendURL = "http://localhost:8080";

export default class Interface {
    getSession() {
        getCookie("session");
    }

    setSession() {
        setCookie("session", 1, 1);
    }

    login(username, password) {
        var payload = {username: username, password: password};
        return ajax("GET", backendURL+"/login", payload);
    }

}

function ajax(method, url, payload) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(method, url);
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        if (req.status == 200 || req.status == 201) {
          var res = {
            status: req.status,
            data: JSON.parse(req.responseText)
          };
          resolve(res);
        } else {
          reject({status: req.status});
        } 
      }
    };
    req.send(JSON.stringify(payload));
  });
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}