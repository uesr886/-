# 拷贝
通常只讨论在引用类型上

# 浅拷贝
拷贝后的对象受原对象的影响
1. Object.create(obj)
2. Object.assign({}, obj)
3. [].concat(arr)
4. 数组结构
5. arr.slice(0)
6. arr.toReversed().reverse()

- shallowCopy原理
1. for..in 遍历原对象上的属性
2. 借助hasOwnProperty规避原对象隐式具有的属性
# 深拷贝
拷贝后的对象受不原对象的影响

