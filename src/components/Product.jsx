import PropTypes from 'prop-types'
// import './index.css'


export const Product = (props) => {
    const { name, price, bio} = props;
    const product = {
      id: props.id,
      name: props.name,
      price: props.price,
    }
    const onClickHandler = (e) => {
      props.onClick(product, e.target.checked)
    }

  return (
    <div id='product' className='border-b-2 border-gray last:border-b-0 bg-white flex'>
      <div id='product__cart' className='flex flex-col align-center justify-center border-r-2 border-gray p-2'>
        <input type='checkbox' className='product__cart-add'  onClick={onClickHandler} />
        <label >Add to Cart</label>
      </div>
      <div className='product__info p-2'>
        <p>{name}</p>
        <p className='product__price'>Pretul: {price}</p>
        <p>Bio: {bio ? 'da' : 'nu'}</p>
      </div>
    </div>
    
  )
}

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bio: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
