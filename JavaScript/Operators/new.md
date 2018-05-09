new,你在背后到底做了些什么呢？
====
在我们做下面的这样的操作的时候  
``` js
 function Person(name, age) {  
  this.name = name;
  this.age = age;
}
const liiiier = new Person('boke', 18)
```
__new__这个操作符到底做了些什么呢?
---
先分析它的步骤
在新建这个对象只需要 ` new Person(name, age);`
---
引擎在背后的做了许多的事情，可以简化成四步的  
1. 创建一个空对象 `const liiiier = {};`在内存中给它分配一个内存空间
2. 将这个liiiier 的原型指向 Person.prototype
   即 liiiier[[proto]] -> Person.prototype
3. Person.call(liiiiier)// Person.apply(liiiier,...args) 
   这是把Person的this指向变成了新建的对象，这样在执行这个构造函数的时候，也就起到了真正的构造一个新对象的作用了
   ``` js
    const liiiier =  new Person('boke',18)
    liiiier.__proto__ = Person.prototype
    Person.apply(liiiier,...args)
    liiiier.name = name;
    liiiier.age = age;
    return liiiier;
  ```
 4. 返回这个新的对象。
 **但事情真的是这样吗？**


