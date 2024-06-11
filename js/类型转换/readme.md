# 原始值转原始值  --- 显示类型转换
1. 转布尔  --- Boolean(x)
2. 转number   --- Number(x)
3. 转字符串   ---  String(x)


# 对象转原始值  --- 隐式类型转换
-  转number: 

  Number({})

 先调用ToNumber(x)，该函数中会再调用ToPrimitive()将对象转为原始值

 ToPrimitive(obj, Number)
 1. 判断接收到的值是不是原始类型，是则返回
 2. 否则，调用valueOf方法，如果得到了原始值，则返回
 3. 否则，调用toString方法，如果得到了原始值，则返回
 4. 报错


- 转String：
  String({})
  先调用ToString(x),该函数中会再调用ToPrimitive()将对象转为原始值

   ToPrimitive(obj, String)
    1. 判断接收到的值是不是原始类型，是则返回
    2. 否则，调用toString方法，如果得到了原始值，则返回
    3. 否则，调用valueOf方法，如果得到了原始值，则返回
    4. 报错

- 转布尔：任何对象转布尔都是true




 # toString
 1. Object.prototype.toString()  返回一个形如 "[object XXXX]" 样的字符串
 2. Array.prototype.toString() 返回一个由数组内部的元素以逗号拼接的字符串
 3. XXXX.prototype.toString() 返回一个字符串字面量



# 一元操作符 +
+ 会触发隐式类型转换，往number转

# 二元运算符 +


#  ==  vs  ===
1. == 会触发隐式类型转换
2. === 不会


