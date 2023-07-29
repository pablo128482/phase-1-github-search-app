function  getCurrentVersionNumber(versionCallback) { //Note callback arguement
    //Make a HTML request to a baCKEND VERSION API

    let request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/users/octocat/repos")
    request.send();
    request.onload = function() {
        if (request.status === 200) { 
            let currentVersion = parseFloat (request.responseText)
            versionCallback(currentVersion, null);
        } else {
            versionCallback(response.statusText, null);
        }
    };
    request.onerror = request.onetimeout = function(e)
    {versionCallback(e.type, null);
    };
}
