const plus = document.querySelector('.plus'),
  minus = document.querySelector('.minus'),
  num = document.querySelector('.num')

let a = 0

plus.addEventListener('click', () => {
  a++
  a = a < 10 ? '0' + a : a
  num.innerHTML = a
  console.log(a)
})

minus.addEventListener('click', () => {
  if (a >= 1) {
    a--
    a = a < 10 ? '0' + a : a
  }
  num.innerHTML = a
  console.log(a)
})

// let b = num.innerHTML
// console.log('num: ' + b)
