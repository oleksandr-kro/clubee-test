import style from './style.module.css';

export const Footer = () => {
  return (
    <footer className={ style.footer }>
      <div>
        <a className={ style.author } href='#'>Powered by Oleksandr Krokhmalnytskyi</a>
      </div>
    </footer>
  )
}