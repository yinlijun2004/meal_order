'use strict';

function getXMLHttpRequest() {
	if (typeof window === 'undefined') {
		throw new Error('no window object present');
	}
	else if (window.XMLHttpRequest) {
		return window.XMLHttpRequest;
	}
	else if (window.ActiveXObject) {
		var axs = [
			'Msxml2.XMLHTTP.6.0',
			'Msxml2.XMLHTTP.3.0',
			'Microsoft.XMLHTTP'
		];
		for (var i = 0; i < axs.length; i++) {
			try {
				var ax = new(window.ActiveXObject)(axs[i]);
				return function () {
					if (ax) {
						var ax_ = ax;
						ax = null;
						return ax_;
					}
					else {
						return new(window.ActiveXObject)(axs[i]);
					}
				};
			}
			catch (e) {}
		}
		throw new Error('ajax not supported in this browser')
	}
	else {
		throw new Error('ajax not supported in this browser');
	}
}

function createXMLHttpRequest() {
	if(!window.XMLHttpRequest) {
		window.XMLHttpRequest = getXMLHttpRequest();
	}

	return new XMLHttpRequest();
}

function httpDoRequest(info) {
	var	xhr = createXMLHttpRequest();

	if(!info || !info.url) {
		return false;
	}

	var url = info.url;
	var data = info.data;
	var method = info.method ? info.method : "GET";
	var isCrossDomain = url.indexOf("http") === 0 && url.indexOf(window.location.hostname) < 0;


	if(isCrossDomain) {
		if(info.autoProxy) {
			url = '/proxy.php?url=' + window.btoa(encodeURIComponent(url));
			console.log("use proxy:" + url);
		}
		else {
			xhr.crossOrigin = "Anonymous";
			if(info.withCredentials) {
				xhr.withCredentials = true;
				console.log("cross domain info.withCredentials=true");
			}
		}
	}

	if(info.responseType) {
		xhr.responseType = info.responseType;
	}
	
	if(info.dataType) {
		xhr.dataType = info.dataType;
	}

	xhr.open(method, url, true);

	if(info.noCache) {
		xhr.setRequestHeader('If-Modified-Since', '0');
	}

	if(info.headers) {
		for(var key in info.headers) {
			var value = info.headers[key];
			xhr.setRequestHeader(key, value);
		}
	}

	if(xhr) {
		if(!xhr.onprogress) {
			xhr.onreadystatechange = function() {
				if(info.onProgress) {
					info.onProgress(xhr);
				}
				if(xhr.readyState === 4) {
					if(info.onDone) {
						if(info.responseType && info.responseType.toLowerCase() === "blob") {
							info.onDone(true, xhr, xhr.response);
						}
						else {
							info.onDone(true, xhr, xhr.responseText);
						}
					}
				}
				//console.log("onreadystatechange:" + xhr.readyState);
				return;
			}
		}
		else {
			xhr.onprogress = function(e)  {
				var total = e.total;
				if(info.onProgress) {
					info.onProgress(xhr);
				}
				console.log("get:" + total);
			 }
			
			xhr.onload = function(e)  {
				if(info.onDone) {
					info.onDone(true, xhr, e.target.responseText);
				}
			}
			
			xhr.onerror = function(e)  {
				if(info.onDone) {
					info.onDone(false, xhr, xhr.responseText);
				}
			}
		}
		
		xhr.send(info.data ? info.data : null);
	}

	return true;
}

function httpGetURL(url, onDone, autoProxy, withCredentials) {
	var rInfo = {};
	rInfo.url = url;
	rInfo.onDone = onDone;
	rInfo.autoProxy = autoProxy;
	rInfo.withCredentials = withCredentials;
	httpDoRequest(rInfo);

	return;
}

function httpPostURL(url, data, onDone, autoProxy, withCredentials) {
	var rInfo = {};
	rInfo.url = url;
	rInfo.onDone = onDone;
	rInfo.method = "POST";
	rInfo.data = data;
	rInfo.autoProxy = autoProxy;
	rInfo.withCredentials = withCredentials;
  rInfo.headers = {};
  if(typeof data === "string"){
    rInfo.headers['Content-Type'] = "application/json";
  }
	httpDoRequest(rInfo);

	return;
}

function httpGetJSON(url, onDone, autoProxy, withCredentials) {
	httpGetURL(url, function(result, xhr, data) {
		var json = null;
		if(result) {
			try {
				json = JSON.parse(data);
			}catch(e) {
				console.log("JSON.parse failed： url=" + url + " data:" + data);
			}
		}
		onDone(json);
	}, autoProxy, withCredentials);

	return;
}

window.jsonpIndex = 0;
function httpGetJSONP(url, onDone, options) {
	var jsonp = "callback";
	var name =  "jsonpCallBack" + window.jsonpIndex++;

	window[name] = function(data) {
		if(onDone) {
			try {
				onDone(data);
			}catch(e) {
				console.log(e.message);
			}
		}
		console.log("jsonp data:" + url + "\n" + JSON.stringify(data));
		delete window[name];
	}

	if(options && options.jsonp) {
		jsonp = options.jsonp;
	}

	if(url.indexOf("?") > 0) {
		url += "&"+jsonp+"="+name;
	}
	else {
		url += "?"+jsonp+"="+name;
	}

	var node = document.head ? document.head : document.body;
	var script = document.createElement("script");
	script.onload = function() { 
		console.log("jsonp success:" + url);
	}

	script.onerror = script.onabort = script.oncancel = function(e) {
		console.log("jsonp error:" + url);
	}

	script.src = url;
	node.appendChild(script);

	return;
}

module.exports.httpGetURL = httpGetURL;
module.exports.httpPostURL = httpPostURL;
module.exports.httpGetJSON = httpGetJSON;
module.exports.httpGetJSONP = httpGetJSONP;
