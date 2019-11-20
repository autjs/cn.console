let ___cncom___ = {log:{}}
Object.defineProperty(___cncom___, '__stack', {
    get: function(){
        let orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack){ return stack; };
        let err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        let stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

let cn = (function(console) {
    for (let k in console) {
        console[k] = (function($met) {
            return function() {
                if (console.switch) {
                    let file = ___cncom___.__stack[1].getFileName();
                    let line = ___cncom___.__stack[1].getLineNumber();
                    let location = '[CN:' + file + ':' + line + ']'
                    location = '%c ' + location + '%c ';
                    Array.prototype.unshift.call(arguments, location, 'color:BlueViolet;font-weight:bold;','color:Brown;font-weight:bold');
                    $met.call(console,...arguments);
                }
            }
        })(console[k])
    }
    return console;
})(console);
cn.switch = true;
// cn.log('哈哈','我是谁， 我在哪')
// console.log(`Error at file:///E:/github/cn.console/index.js:3`)
exports = cn;