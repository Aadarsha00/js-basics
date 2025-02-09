const fetchData1 = async () => {
  const response1 = await fetch("https://jsonplaceholder.typicode.com/users/");
  if (!response1.ok) {
    throw new Error(`Error: ${response1.status} ${await response1.text()}`);
  }
  return response1.json();
};
const fetchData2 = async () => {
  const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/");
  if (!response2.ok) {
    throw new Error(`Error: ${response2.status} ${await response2.text()}`);
  }
  return response2.json();
};
async function storedData() {
  try {
    const [user, post] = await Promise.all([fetchData1(), fetchData2()]);
    console.log(user);
    console.log(post);
  } catch (error) {
    console.log("There was a error", error.message);
  }
}
storedData();
