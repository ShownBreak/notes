/**
 * 偏函数
 * @description
 * 函数柯理化，参数是从前往后依次进行调用的；
 * 但有些场景，我们希望中间的某个参数在最后调用
 * 例如setTimeout(fn, 1000),我们希望封装一个1s的计时器，柯理化就不能直接起作用了。
 *
 * 这时可以用偏函数解决
 */

const partial = (fn, ...args) => {
  return function (...fullArgs) {
    let arg = 0;
    for (let i = 0; i < args.length && arg < fullArgs.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArgs[arg++];
      }
    }

    return fn.apply(null, args);
  };
};

const delay10ms = partial(setTimeout, undefined, 1000);

delay10ms(() => console.log("1s 后打印"));
