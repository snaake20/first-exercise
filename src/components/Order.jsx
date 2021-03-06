
import PropTypes from 'prop-types'


export const Order = (props) => {
    const { name, price} = props;
    return(
    <div className='border-b-2 border-gray last:border-b-0 bg-white flex'>
      <div>
        <p>{name}</p>
        <p>Pret: {price}</p>
      </div>
    </div>
    )
}

Order.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}