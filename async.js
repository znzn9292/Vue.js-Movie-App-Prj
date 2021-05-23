import { resolve } from "core-js/fn/promise"

// Promise
function a() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('a')
            resolve()
        }, 1000)
    })
}
function b() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('b')
            resolve()
        }, 1000)
    })
}
function c() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('c')
            resolve()
        }, 1000)
    })
}
function d() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('d')
            resolve()
        }, 1000)
    })
}
a()
    .then(() => b())
    .then(() => c())
    .then(() => d())

//-------------------------//

// async await
await a()   // promise 객체 반환 해야 await 사용 가능
await b()
await c()
d()

// async 라닌 키워드가 있는 함수 안에서만 동작한다.
async function asyncFunc() {
    await a()   
    await b()
    await c()
    await d()
    console.log('done')
}

async function asyncFunc() {
    try {
        const res = await a()   
        console.log(res)

    }catch (error) {
        console.log(error)
        alert(error.message)
        
    }finally {
        console.log('done')
    }
}
//-------------------------//

// resolve
function a() {
    return new Promise((resolve, reject) => {
        if(isError) {
            reject(Error)
        }
        setTimeout(() => {
            console.log('a')
            resolve('done')
        }, 1000)
    })
}

a()
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
        alert(error.message)
    })
    .finally(() => {

    })


