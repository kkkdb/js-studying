 Function.prototype.extend = function(superClass){  
        if(typeof superClass === 'function'){//类式继承  
            var F = function(){}; //创建一个中间函数对象以获取父类的原型对象  
            F.prototype = superClass.prototype; //设置原型对象  
            this.prototype = new F(); //实例化F, 继承父类的原型中的属性和方法，而无需调用父类的构造函数实例化无关的父类成员  
            this.prototype.constructor = this; //设置构造函数指向自己  
            this.superClass = superClass; //同时，添加一个指向父类构造函数的引用，方便调用父类方法或者调用父类构造函数  
        } else if(typeof superClass === 'object'){ //方法的扩充  
            var pro = this.prototype;  
            for(var k in superClass){  
                if(!pro[k]){ //如果原型对象不存在这个属性，则复制  
                    pro[k] = superClass[k];  
                }  
            }  
        } else {  
            throw new Error('fatal error:"Function.prototype.extend" expects a function or object');  
        }  
          
        return this;  
    };    
    /*调用方式*/  
    Author.extend({  
        sayHello:function(){  
            alert('Hello');  
        }  
    }).extend(classFunction.prototype);//原型也是对象，所以一样可以作为参数传入，这样便扩展了其他类的原型方法，有点类似多重继承。    
