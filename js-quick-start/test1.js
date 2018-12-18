var myObject = {
	value: 0,
	increment: function(inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};
myObject.increment();
console.log(myObject.value);
myObject.increment(2);
console.log(myObject.value);

function add(a, b) {
	console.log(a, b)
	return a + b;
}

// var sum = add(3,4);
// console.log(sum);

myObject.double = function() {
	//var that = this;
	var helper = function() {
		//that.value = add(that.value, that.value);
		console.log(this.value);
		this.value = add(this.value, this.value);
	};
	helper();
};
myObject.double();
console.log(myObject.value);

var Quo = function(string) {
	this.status = string;
};
Quo.prototype.get_status = function() {
	return this.status;
};

var myQuo = new Quo("confused");
console.log(myQuo.get_status());

var array = [3,4];
var sum = add.apply(null, array);
console.log(sum);

var statusObject = {
	status: 'A-OK'
};
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);

// Function.prototype.method = function(name, func) {
// 	this.prototype[name] = func;
// 	return this;
// };

Number.prototype.integer = function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
};
console.log((-10/3).integer());

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '');
};

console.log("" + " neat ".trim() + "");

var seqer = new require('./gensym');
seqer.set_prefix('Q');
console.log(seqer.gensym());