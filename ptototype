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

//接下来用原型加继承编写一段例子
//"小头爸爸" 牵着  "大头儿子"  的手去吃  "饭"
//吃完饭小头爸爸背着大头儿子回 "家"

function Person(name){
    this.name = name;
}

Person.prototype = {
    eat : function(rice){
        console.log(this.name + "正在吃" + rice.name);
    },
    handInhand : function(hand){
        console.log(this.name + "牵着" + hand);
    },
    gohome : function(home){
        console.log('回' + home.name);
    }
}

function Rice(name){
    this.name = name;
}

function Father(name){
    this.name = name;
}
Father.prototype = new Person();
Father.prototype.carry = function(son){
    console.log('吃完饭' + this.name + '背着' + son);
}

function Home(name){
    this.name = name;
}

var father = new Father('小头爸爸');
var child = new Person('大头儿子');
var xf = new Rice('小份饭');
var df = new Rice('大份饭');
var hourse = new Home('上海市中心豪华大别墅');
father.handInhand('小头儿子的手');
father.eat(df);
child.eat(xf);
father.carry(child.name);
father.gohome(hourse);
