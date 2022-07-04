

const Order = (props) => {
    const { name, price} = props;
    return(
    <div className='border-b-2 border-gray last:border-b-0 bg-white flex'>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
    )
}