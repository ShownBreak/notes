/**
 * 函数柯里化
 * @description 把多参数函数转化为一元函数的柯里化函数
 */

const curry = (fn) => {
  if (typeof fn !== "function") {
    console.log("No Function Found!");
    return;
  }

  return function curryFn(...args) {
    if (args.length < fn.length) {
      return function () {
        // return curryFn(...[...args, ...arguments]);
        return curryFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }

    return fn.apply(null, args);
  };
};

const multiFn = (a, b, c, d) => a + b + c + d;

console.log(curry(multiFn)(1)(2)(3));
