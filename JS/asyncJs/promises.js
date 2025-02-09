//? setTimeout(callback, Interval, para)
// console.log("start");
// setTimeout(
//   (name, age) => {
//     console.log(name, age);
//   },
//   2000,
//   "john",
//   20
// );
// console.log("end");

//?setInterval
// let x = 5;
// const timerID = setInterval(() => {
//   x--;
//   console.log(x);
//   if (x === 0) {
//     clearInterval(timerID);
//   }
// }, 1000);

//?Promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("data fetching");
//     resolve("data loaded");
//   }, 2000);
// });
// promise
//   .then((data) => {
//     console.log("Then", data);
//   })
//   .catch((err) => {
//     console.log("error occurred:", err);
//   });

// let isLoading = true;
// const fetchData = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id) {
//         resolve(`Data loaded with ID ${id}`);
//       } else reject("Id is required");
//     }, 2000);
//   });
// };
// fetchData()
//   .then((data) => {
//     console.log("then", data);
//   })
//   .catch((err) => {
//     console.log("then", err);
//   })
//   .finally(() => {
//     isLoading = false;
//     console.log(isLoading); //?used when if it resolved or rejected this logic needs to be used
//   });
