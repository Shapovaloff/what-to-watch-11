import {useState, MouseEvent} from 'react';
import {Genres} from '../../const';

function GenresList(): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(Genres[2]);

  return (
    <ul className="catalog__genres-list">
      {Genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`}>
          <a href="#!" className="catalog__genres-link"
            onClick={(evt: MouseEvent<HTMLElement>) => {
              evt.preventDefault();
              setActiveGenre(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
