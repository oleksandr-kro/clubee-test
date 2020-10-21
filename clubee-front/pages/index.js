import { CommonHead, Header, Footer } from '../components';
import Button from '@material-ui/core/Button';
import styles from '../styles/Home.module.css';
import Router from "next/router";

export default function Home() {

  const handleArticleClick = () => {
    Router.push("/articles");
  }

  return (
    <div className={ styles.container }>
      <CommonHead />
      <Header />
      <main className={ styles.main }>
        <Button onClick={ handleArticleClick } variant="contained" size="large" color="primary">
          Go to articles
        </Button>
      </main>

      <Footer />
    </div>
  )
}
