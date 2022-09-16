const DEFAULT_API_URI = process.env.REACT_APP_DEFAULT_API_URI;

export const listOwnerlessPetPosts = () => 
    fetch(`${DEFAULT_API_URI}/ownerless-pet-post`)
      .then(res => res.json())
      .then(data => data);
