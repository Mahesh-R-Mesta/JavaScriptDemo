var obj = {
    name:'Book',
    priority:'1'
}

console.log(obj.name);

// b = new Cat('billi Cat','5');
// b.cate();
// b.sound();


class Animal {
#name
#age
constructor(name,age){
this.#name =name;
this.#age = age;
}
cate(){
    console.log(this.#name+' is an animals');
}
sound(){  
 console.log('Bauuuuuuu');
}
}

class Cat extends Animal {
constructor(name,age){
super(name,age);
console.log('Called')
}
sound(){  
    console.log('Meauuu');
}

}
a = new Cat('Billu','10');
a.cate();
a.sound();
console.log(a.nickName);
