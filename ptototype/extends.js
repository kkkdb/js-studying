/*extend函数，实现原型式继承*/  
    var extend = function(obj){  
        if(typeof obj !== 'object'){  
            throw new Error('fatal error: "Object.prototype.extend" expects a object');  
        }  
          
        var F = function(){}; //创建一个中间函数对象  
        F.prototype = obj; //设置其原型对象指向obj  
          
        return new F();//返回实例化的F      
    };  
      
    /*父类字面量对象*/  
    var Person = {  
        init: function(name){ //初始化函数，进行各种属性设置，代替了构造函数的作用  
            this.name = name;  
        },  
        getName:function(){  
            return this.name;  
        }  
    };  
      
    /*子类对象*/  
    var author1 = extend(Person); //继承Person  
    author1.init('author');  
    alert(author1.getName()); //输出author  
    author1.books = 'xxx'; //设置自己的属性  
    author1.getBooks = function(){  
        return this.books;  
    };  
    alert(author1.getBooks());//输出xxx  
