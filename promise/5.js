var data = null
function a() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('a is ok');
            data = 'hello'
            // resolve('请求道的数据')
            reject()
        }, 1000);
    })
}

function b() {
    console.log(data);
}

// a().then(b)
a().
then((res) => {
    b()
    console.log(res);
})
.catch((err) => {
    console.log(err, 'xxxx');
})