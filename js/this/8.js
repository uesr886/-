// function foo() {}
// var bar = function(){}






var obj = {
  a: 1,
  foo: function() {
    // this
    const fn = () => {
      console.log(this.a);
    }
    fn()
  }
}

// obj.foo()


const a = () => {
  const b = () => {
    const c = () => {
      console.log(this);
    }
    c()
  }
  b()
}
a()