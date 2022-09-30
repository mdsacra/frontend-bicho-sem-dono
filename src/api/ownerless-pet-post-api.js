const DEFAULT_API_URI = process.env.REACT_APP_DEFAULT_API_URI;

export const listOwnerlessPetPosts = () => 
    fetch(`${DEFAULT_API_URI}/ownerless-pet-post`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => data);

export const createOwnerlessPetPost = (body) =>
    fetch(`${DEFAULT_API_URI}/ownerless-pet-post`, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json()
    .then(data => console.log(data)))
    .catch((error) => console.log(error));
