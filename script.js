// bài 1
const result_ex1 = document.querySelector(".result_ex1")

let i = 0,
    sum = 0

while (sum < 10000) {
    sum += i
    i++
}

result_ex1.innerHTML = `Số nguyên dương nhỏ nhất là ${i}`

// bài 2
const inputX = document.querySelector("#inputX"),
    inputN = document.querySelector("#inputN"),
    btn_ex2 = document.querySelector(".btn_ex2"),
    result_ex2 = document.querySelector(".result_ex2")

function calPowSum(n, x) {
    let sum = 0
    while (n > 0) {
        sum += Math.pow(x, n)
        n--
    }
    return sum
}

btn_ex2.addEventListener("click", () => {

    result_ex2.innerHTML = calPowSum(inputN.value * 1, inputX.value * 1)

})

// bài 3 
const inputNum = document.querySelector("#inputNum"),
    btn_ex3 = document.querySelector(".btn_ex3"),
    result_ex3 = document.querySelector(".result_ex3")

function factorial(n) {
    if (n <= 1)
        return 1
    else
        return n * factorial(n - 1)
}

btn_ex3.addEventListener("click", () => {

    result_ex3.innerHTML = factorial(inputNum.value * 1)

})

// bài 4
const btn_ex4 = document.querySelector(".btn_ex4"),
    result_ex4 = document.querySelector(".result_ex4")

btn_ex4.addEventListener("click", () => {

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0)
            result_ex4.innerHTML += `<p class="bg-danger text-light p-3 result_ex3 my-3">Brrrruhhh chẳn ${i}</p>`
        else
            result_ex4.innerHTML += `<p class="bg-primary text-light p-3 result_ex3 my-3">LOLOLOL lẻ ${i}</p>`
    }
})