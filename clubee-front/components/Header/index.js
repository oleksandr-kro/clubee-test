import style from './style.module.css';
import Router from "next/router";

export const Header = () => {

  const handleHomeClick = () => {
    Router.push('/');
  }

  const handleArticlesClick = () => {
    Router.push('/articles');
  }

  const handleNewArticleClick = () => {
    Router.push('/new-article');
  }

  return (
    <header className={ style.header }>
      <div className={ style.logo }>Logo</div>
      <nav className={ style.pages }>
        <span onClick={ handleHomeClick }>HOME</span>
        <span onClick={ handleArticlesClick }>ARTICLES</span>
        <span onClick={ handleNewArticleClick }>CREATE ARTICLE</span>
      </nav>
    </header>
  )
}