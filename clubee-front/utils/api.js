export const fetchArticles = () => {
  return fetch('http://localhost:5000/articles')
    .then(res => res.json())
}