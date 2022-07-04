import PropTypes from 'prop-types'

export const Product = (props) => {
    const {name, price, bio} = props;
    console.log(props)
  return (
    <div className='product'>
      <div className='product__cart'>
        <input type='checkbox' className='product__cart-add'>
          Add to Cart
        </input>
      </div>
      <div className='product__info'>
        <p>{name}</p>
        <p className='product__price'>Pretul: {price}</p>
        <p>Bio: {bio ? 'DA' : 'NU'}</p>
      </div>
    </div>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bio: PropTypes.bool.isRequired,
}
