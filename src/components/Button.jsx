import PropTypes from 'prop-types'

export const Button = (props) => {
    // console.log(props.order)
    const handleClick = () => {
        const order = {
            data:{
                products:[
                    ...props.order
                ]
            }
        }
        const toSend = JSON.stringify(order)
        // console.log(toSend)
        fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: toSend
        })
    }
    return (
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>
        Order
        </button>
    )
}

Button.propTypes={
    order: PropTypes.array.isRequired
}