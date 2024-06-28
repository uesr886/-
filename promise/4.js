function xq() {
    return new Promise((resolve, reject) => { // {status: resloved}
        setTimeout(() => {
            console.log('相亲了');
            resolve()
        }, 2000)
    })
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚了');
            resolve()
        }, 1000)
    })
}

function baby() {
    console.log('出生了');
}

xq()
.then(() => {
    return marry()
})
.then(() => {
    baby()
})

