/*给函数原型增加一个extend函数，实现继承*/  
    Function.prototype.extend = function(superClass){  
        if(typeof superClass !== 'function'){  
            throw new Error('fatal error:Function.prototype.extend expects a constructor of class');  
        }  
          
        var F = function(){}; //创建一个中间函数对象以获取父类的原型对象  
        F.prototype = superClass.prototype; //设置原型对象  
        this.prototype = new F(); //实例化F, 继承父类的原型中的属性和方法，而无需调用父类的构造函数实例化无关的父类成员  
        this.prototype.constructor = this; //设置构造函数指向自己  
        this.superClass = superClass; //同时，添加一个指向父类构造函数的引用，方便调用父类方法或者调用父类构造函数  
          
        return this;  
    };    
          
          
    /*Class Person*/  
    function Person(name){  
        this.name = name;  
    }  
    Person.prototype.getName = function(){  
            return this.name;  
    };  
      
      
    /*Class Author*/  
    function Author(name, books){  
        Author.superClass.call(this, name);  
        this.books = books;  
    }  
    /* 
     * 这里用了链式调用，下面语句等价于： 
     * Author.extend(Person); Author.prototype.getBooks = function(){```}; 
     */  
    Author.extend(Person).prototype.getBooks = function(){  
        return this.books;  
    };  
    /*方法的覆写，通过superClass调用父类的方法获得基本信息，再调用子类的方法获得更特殊的信息*/  
    Author.prototype.getName = function(){  
        var name = Author.superClass.prototype.getName.call(this);  
        return name + ', Author of ' + this.getBooks();  
    };  
