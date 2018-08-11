const promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('this is my resolve');
  // }, 2000);
  setTimeout(() => {
    reject('Something wrong');
  }, 2000);
});

console.log('before promise');

promise.then(data => {
  console.log('1', data);
}).catch(error => {
  console.log('error:', error);
});

console.log('after promise');