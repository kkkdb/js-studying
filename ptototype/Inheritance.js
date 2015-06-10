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
