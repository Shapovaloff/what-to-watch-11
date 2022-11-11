import {ChangeEvent, Fragment, useState} from 'react';
import {INIT_RATING, MAX_RATING} from '../../const';

function AddReview(): JSX.Element {
  const [rating, setRating] = useState(INIT_RATING);
  const ratingArray = new Array(MAX_RATING).fill(null).map((_, id) => id + 1).reverse();

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingArray.map((item) => (
              <Fragment key={`rating-${item}`}>
                <input className="rating__input" onChange={handleRatingChange} checked={Number(item) === rating} id={`star-${item}`} type="radio" name="rating" value={item} />
                <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3' }}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
