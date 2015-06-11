Object.prototype.extends=function(obj,actions){   //Create a property to inherit
    for(var prop in obj.prototype){
        this.prototype[prop] = obj.prototype[prop];
    }
    for(var prop in actions.prototype){
        this.prototype[prop] = actions.prototype[prop];
    }
}
// Father.prototype = new Person();
Father.extends(Person,
    Father.prototype.carry = function(son){
        console.log('吃完饭' + this.name + '背着' + son);
    }
);

/*Class Person*/  
    function Person(name){  
        this.name = name;  
    }  
      
    Person.prototype.getName = function(){  
            return this.name;  
    };  
      
    /*Class Author*/  
    function Author(name, books){  
        Person.call(this, name); //调用父类构造函数，第二次调用父类构造函数  
        this.books = books;   
    }  
      
    Author.prototype = new Person(); //设置原型链以获得父类的方法， 第一次调用父类构造函数  
    Author.prototype.constructor = Author; //设置构造函数  
    Author.prototype.getBooks = function(){  
        return this.books;  
    };  
