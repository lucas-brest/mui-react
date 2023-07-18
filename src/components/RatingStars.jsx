import { Rating } from "@mui/material"

const RatingStars = ({rating}) => {
  const {rate, count} = rating

  return (
    <>
      <Rating name="half-rating-read" precision={0.5} value={rate} size="large" readOnly/>
    </>
  )
}

export default RatingStars