import showLikes from './showLike.js';

const apiUrl = 'https://api.tvmaze.com/search/shows?q=all';

const getLikes = async () => {
  await fetch(`${apiUrl}/likes`)
    .then((response) => response.json())
    .then((response) => showLikes(response));
};

const postLikes = async (id) => {
  await fetch(`${apiUrl}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
};

export { postLikes, getLikes };