// 2. filter 메서드를 활용해 결혼한 사람들만 모아 married 상수에 할당하시오.
const users = [
  { name: 'John', age: 31, isMarried: true, balance: 100, },
  { name: 'Sarah', age: 22, isMarried: false, balance: 200, },
  { name: 'Ashley', age: 25, isMarried: true, balance: 300, },
  { name: 'Robert', age: 27, isMarried: false, balance: 400, },
  { name: 'Tom', age: 35, isMarried: true, balance: 500, },
]

const married = users.filter(function(user){
  return user.isMarried==true
})
console.log(married)