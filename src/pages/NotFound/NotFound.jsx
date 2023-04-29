import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>The page you are looking for does not exist.</p>
        <a href="#">
          {' '}
          <button className={css.btn}>HOME</button>
        </a>
      </div>
    </div>
  );
};
export default NotFound;
