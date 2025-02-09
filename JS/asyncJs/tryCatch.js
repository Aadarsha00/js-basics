const fetchData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve(`Data loaded with ID ${id}`);
      } else reject("Id is required");
    }, 2000);
  });
};
async function getData() {
  try {
    const response = await fetchData(1);
    console.log(response);
  } catch {
    console.log("err", err);
  } finally {
    console.log("finally");
  }
}
getData();
