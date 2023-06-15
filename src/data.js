async function getUsers() {
  const url = "https://randomuser.me/api/?inc=name,picture&results=50";

  try {
    const request = await fetch(url);
    const result = await request.json();

    const users = result.results;

    return users;
  } catch (error) {
    console.log(error);
  }
}

export default getUsers;
