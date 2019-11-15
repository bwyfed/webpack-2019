import funcB from './moduleB'
console.log('moduleA calls moduleB')
funcB()
export default function func() {
  console.log('moduleA')
  var set = new Set([4, 5, 6])
  console.log(set.has(5))
}