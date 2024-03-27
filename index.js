// const a = 10
// let b = 20
// var c = 30

function sekhar() {
  console.log("hello")
}

sekhar()

const object2 = {
  name:"sekhar",
  city: "history"
}

let arr = ["arr", "aRR2"]

const object1 = {
  name:"SHeki"
}


object1.__proto__ = object2

console.log(object1.city)