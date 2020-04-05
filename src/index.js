
function Person(name, age) {
  this.name = name
  this.age = age
  this.say = function() {
    console.log('I\'m' + this.name)
  }
}

function HXW(age) {
  Person.call(this, 'hxw', age)
  this.girlfriend = 'zzn'
}

function inherit(Sub, Sup) {
  var o = Object(Sup.prototype)
  o.constructor = Sub
  Sub.prototype = o
}

inherit(HXW, Person)

var hxw = new HXW(18)
hxw.say()
console.log(hxw.girlfriend)
