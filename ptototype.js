// 构造器函数
function Person(name){
    this.name = name;
}
Person.prototype = {
    speak : function(){
        console.log(this.name + '在说话')
    }
}

function Dog(name){
    this.name = name;
}
Dog.prototype = { 
    bark : function(){
        console.log(this.name + '汪汪汪')
    }
}
var person = new Person('张三');
person.speak();
var dog = new Dog('贝贝');
dog.bark();


Object.prototype.speak = function(info){
        console.log(info);
}

var obj = new Object();
obj.speak('dd');


