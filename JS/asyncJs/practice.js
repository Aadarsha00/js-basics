// const getUser = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// };

// async function storeData() {
//   try {
//     const data = await getUser();
//     console.log(data);
//   } catch (error) {
//     console.log("Sorry there is a error");
//   }
// }
// storeData();

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("There was a error");
  }
  return response.json();
};
async function storePosts() {
  try {
    const posts = await getPosts();
    posts.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.log("Unable to fetch posts", error.message);
  }
}
storePosts();
