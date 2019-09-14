const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("successful");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

//can use as many .then()'s as I want
myPromise
  .then(value => value + "!!!!")
  .then(newValue => console.log(newValue))
  .catch(rejectValue => console.log(rejectValue));
