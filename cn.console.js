let cn = (function(console){for(let k in console) {console[k] = (function($met){return function() {if(console.switch) {$met.call(console, ...arguments);}}})(console[k])}return console;})(console);cn.switch = true;exports = cn;