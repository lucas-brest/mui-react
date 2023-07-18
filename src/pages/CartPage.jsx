import { useSelector, useDispatch } from 'react-redux';
import { getCartTotalPrice } from './../store/cartSlice'
import { useEffect } from 'react';
import useValidateLogin from './../hooks/useValidateLogin'

const CartPage = () => {

  const dispatch = useDispatch();
  const {data: cartProducts, totalAmount} = useSelector(state => state.cart);

  useEffect(() => {
      dispatch(getCartTotalPrice());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]); 

  useValidateLogin()

  console.log(cartProducts)

  return (
    <div>CartPage</div>
  )
}

export default CartPage