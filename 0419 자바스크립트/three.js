// 3. find 메서드를 활용해 이름이 Tom인 사람만 tom 상수에 할당하시오.
const users = [
  { name: 'John', age: 31, isMarried: true, balance: 100, },
  { name: 'Sarah', age: 22, isMarried: false, balance: 200, },
  { name: 'Ashley', age: 25, isMarried: true, balance: 300, },
  { name: 'Robert', age: 27, isMarried: false, balance: 400, },
  { name: 'Tom', age: 35, isMarried: true, balance: 500, },
]

const tom = users.find(function(user){
  return user.name=='Tom'
})
console.log(tom)