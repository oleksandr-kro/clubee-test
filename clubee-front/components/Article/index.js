import style from './style.module.css';

export const Article = (props) => {
  const { title, description, date } = props.data;
  return (
    <div className={ style.article_block }>
      <div className={ style.article }>
        <h2 className={ style.title }>{ title }</h2>
        <p className={ style.description }>{ description }</p>
        <span className={ style.date }>{ date }</span>
      </div>
    </div>
  )
}