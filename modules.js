var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayName(number) {
    return names[number];
}


var dayName = function () {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return function (number) {
        return names[number];
    }
}();
console.log(dayName(1));

(function () {
    function square(x) {
        return (x * x);
    }
    var hundred = 100;
    console.log(square(100));
})();


(function (exports) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    exports.name = function (number) { return names[number]; };
    exports.number = function (name) { return names.indexOf(name); };
}( this.weekDay = {} );
console.log(weekDay.name(weekDay.number("Wednesday")));

var plusOne = new Function("n", "return n+1;");
console.log(plusOne(5));

function readFile(name) {
    var r = new FileReader();
    r.onload = function (theFile) {
        var t = r.result;
        return t;
    };
    r.readAsText(name, "UTF-16");
    
    return "var names = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]; exports.name = function (number) { return names[number]; }; exports.number = function (name) { return names.indexOf(name); };";

    return "module.exports = function (side) { return { area: side * side  }; }";

}
function require(name) {
    var txt = readFile(name);
    var code = new Function("exports", txt);
    var exports = {};
    code(exports);

    return exports;
}

console.log(require("m1.js").name(2));

/*
- require doesn't use any cache, results in redundant reloads. solution use cache
- supports only one 'exports' object. cant return a function, eg. solution, provide 'module' variable that has 'exports' property. this points to 'exports' object created by require, but can also be replaced by anything else.
*/
function require(name) {
    if (name in require.cache)
        return require.cache[name];

    var code = new Function("exports, module", readFile(name));
    var exports = {}, module = { exports: exports };
    code(exports, module);
    require.cache[name] = module.exports;

    return module.exports;
}
require.cache = Object.create(null);
console.log(require("./m1.js")(4).area);

/* This type of module system is known as CommonJS modules. It is built into the Node.js system.
*/
