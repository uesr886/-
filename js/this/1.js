let obj = {
  myname: '段总',
  age: 18,
  say: function() {
    console.log(this.myname);
  }
}

obj.say()