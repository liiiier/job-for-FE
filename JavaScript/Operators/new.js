// when We new a obj , 
//what the operator new do behinds the scenes
function Person(name, age) {
  this.name = name;
  this.age = age;
  return this
}
const liiiier = Person('boke', 18)
console.log(liiiier)