import { useState, useEffect } from 'react';
import { CommonHead, Header, Footer, Article } from '../../components';
import { fetchArticles } from '../../utils/api';
import style from './style.module.css';

export default function Articles() {

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArticles()
      .then(articles => {
        setArticles(articles);
      })
      .then(() => { setLoading(false) })
  }, [])

  return (
    <div className={ style.container }>
      <CommonHead />
      <Header />
      { loading && <div>Loading...</div> }
      <main className={ style.main }>
        <div className={ style.articles }>
          { articles && articles.map((article) => <Article key={ article.id } data={ article } />) }
        </div>
      </main>

      <Footer />
    </div>
  )
}