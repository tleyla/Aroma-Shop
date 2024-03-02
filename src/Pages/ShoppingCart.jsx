import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
    setSubtotal(total);
  }, [cartItems]);

  return (
    <>
      <Header />
      <PagesBanner text1="Shopping Cart" text2="Home-Shopping Cart" />
      <section className="cart__area">
        <div className="container">
          <div className="cart__area_thead">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              {cartItems.map((productItem, index) => (
                <tbody key={productItem.id}>
                  <tr>
                    <td>
                      <div className="cart__area__image">
                        <Link to="/productdetails">
                          <div>
                            <img src={productItem.image} alt="cart1" />
                          </div>
                        </Link>
                        <div>
                          <p>{productItem.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>{productItem.price}</h5>
                    </td>
                    <td>
                      <div>
                        <input
                          type="number"
                          defaultValue={1}
                          title="Quantity:"
                        />
                      </div>
                    </td>
                    <td>
                      <h5>{productItem.price}</h5>
                    </td>
                    <td>
                      <MdDeleteOutline
                        style={{ fontSize: "20px" }}
                        onClick={() => handleRemoveFromCart(productItem.id)}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5 style={{marginTop:"20px"}}>${subtotal.toFixed(2)}</h5>
                  </td>
                </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <Button>Continue Shopping</Button>
                    </td>
                    <td>
                    <Button>Proceed To Checkout</Button>
                    </td>
                  </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
