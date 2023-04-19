// 5. reduce 메서드를 활용해 모든 사용자들의 계좌잔액을 totalBalance 상수에 할당하시오.
const users = [
  { name: 'John', age: 31, isMarried: true, balance: 100, },
  { name: 'Sarah', age: 22, isMarried: false, balance: 200, },
  { name: 'Ashley', age: 25, isMarried: true, balance: 300, },
  { name: 'Robert', age: 27, isMarried: false, balance: 400, },
  { name: 'Tom', age: 35, isMarried: true, balance: 500, },
]

const totalBalance = users.reduce(function(total,user){
  return total+user.balance
},0)

console.log(totalBalance)