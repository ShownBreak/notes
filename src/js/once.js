/**
 * once
 * @description 保证函数只运行一次
 * @param {Function} func 目标函数
 */

const once = (func) => {
  if (typeof func !== "function") return;
  let done = false;

  return function () {
    return done
      ? undefined
      : ((done = true),
        func
          .apply(this, arguments)
          .then(() => {
            done = false;
          })
          .catch(() => {
            done = false;
          }));
  };
};

const testFn = once((val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("val", val);
      reject();
    }, 1000);
  });
});

testFn(1);
testFn(3);

setTimeout(() => {
  testFn(2);
}, 1000);
