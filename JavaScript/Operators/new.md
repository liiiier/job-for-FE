new,你在背后到底做了些什么呢？
====
在我们做下面的这样的操作的时候  
```javaScript
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
   ```javaScript
    const liiiier =  new Person('boke',18)
    liiiier.__proto__ = Person.prototype
    Person.apply(liiiier,...args)
    liiiier.name = name;
    liiiier.age = age;
    return liiiier;
  ```
 4. 返回这个新的对象。
---
会不会有新的可能呢？
`var liiiier = new Person('liiiier',18)` 这条语句我觉得应该是孤立的，就是一句赋值语句  
当js引擎执行的时候，只会先定义一个变量 `liiiier = undefined`,当下面的语句出现这个变量才会去查询这个变量，可是这样好像也不太好，那我就假设这条语句已经执行结束了，结果就是我创建了一个变量liiiier,并且它还有属性，它还是一个对象居然。我觉得，=号右边就是独立执行的，它和等号左边的是毫无相关的，可以这样理解吗？我的意思是，等号右边通过 new操作符，创建一个新的对象，返回给这个；liiiier标识符，就好比 var num = 10;这时候，num就是一个number类型的值了，在js中，标识符，就是一个符号，只有赋予它对应的值，他才可以称作变量的，这时候它是看的见摸得着可以进行操作并拥有魔力的变量了；所以，`var liiiier = new Person('liiiier',18)`左边只是声明一个标识符，它可没有立场的；所以重点是右边到底做了什么呢？  
摆脱了上一种的思路，我就从this的角度来分析new:
`new Person('liiiier',18`这条语句，如果去掉这个new,那么它是什么呢？不就是一个函数的执行吗？可是当我们去掉这个new后,`var liiiier =  Person('liiiier',18)`  
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const liiiier = Person('boke', 18)
console.log(liiiier)//undefined
```
---
如果这样呢？
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  return this
}
const liiiier = Person('boke', 18)
console.log(liiiier) //Window
```
这说明什么呢？在没有new 的作用下，函数就是普通的函数，在宿主环境调用，它的this就指向宿主环境,作为方法被调用，它的this就执向调用它的对象了。那么所谓的构造函数就很奇怪了不是吗？他们没有构造对象的能力的，他们只是new 的一个工具函数，为了满足不同的对象构造，这些生来就为了被new 创建对象实例的函数就长得很很class  
为什么这么说呢？请看
```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```
很显然new 并不是简单的返回了这个函数的this,因为这个函数的this是指向宿主环境的，那么也就不存在构造对象这一说法了；那么这个this肯定是被new 的参与下被改了，而且是在我们的函数执行之前改变的啊，那么可以改变this的能力的方法都有什么呢，天哪，又回去了，call,apply是嘛？对了，但是不是把this指向右边的对象的;  
1. 创建一个空对象 tempObj
2. ` tempObj.__proto__ = Person.prototype; Person.apply(tempObj,...args)`;
3. 返回这个tempObj
4. liiiier = tempObj
--------------
就先到这里吧，我先思考到这里；晚上还有阿里的笔试，我再看看别的东西了


