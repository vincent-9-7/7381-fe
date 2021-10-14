import React from 'react';
import StarRatings from 'react-star-ratings';

function Star(props) {
  const {rating, totalRating} = props;
  return(
    <>
        <StarRatings
          rating={rating}
          numberOfStars={totalRating}
          starRatedColor="#FEE440"
          starDimension="25px"
          starSpacing="2px"
          starEmptyColor="rgba(253,247,122,0.3)"
          name="rating"
        />
    </>
  );
};

export default Star;