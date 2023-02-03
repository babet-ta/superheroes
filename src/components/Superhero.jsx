import './Superhero.css';

function Superhero(props) {
  return (
    <div className='hero_card'>
      <img src={props.url}></img>
      <div className='hero_name'>Имя: {props.name}</div>
      <p className='hero_text'>Вселенная: {props.universe}</p>
      <p className='hero_text'>Альтер-эго: {props.alter}</p>
      <p className='hero_text'>Род деятельности: {props.occupation}</p>
      <p className='hero_text'>Друзья: {props.friends}</p>
      <p className='hero_text'>Суперспособности: {props.powers}</p>
      <p className='hero_text'>Подробнее: {props.text}</p>
    </div>
  );
}

export default Superhero;