fetch("http://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      "http://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then(response => response.json())
  .then(posts => console.log(posts));

//async

const asyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "http://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postsResponse = await fetch(
      "http://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
    );
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (err) {
    console.log("error");
  }
};
