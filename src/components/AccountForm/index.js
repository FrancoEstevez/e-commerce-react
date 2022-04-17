import React from "react";
import { useState } from "react";
import { useCartContext } from "../CartContext/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Modal from "../Shared/Modal";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import emptycart from "../CartContext/cartContext"
const AccountForm = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [id, setId] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const { cartList, totalPrice, emptyCart } = useCartContext();

  const generateOrder = async (e) => {
    e.preventDefault();
    let order = {};

    order.buyer = dataForm;
    order.total = totalPrice();

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.brand;
      const price = cartItem.price * cartItem.cantidad;

      return { id, name, price };
    })
    const db = getFirestore();
    const queryCollectionSet = collection(db, "orders");
    addDoc(queryCollectionSet, order)
      .then((resp) => {
        setId(resp.id)
        setIsModalOpen(true)
      })
      .catch((err) => console.error(err))
      .finally(() => console.log("finished"))
  }

  function handleChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="loginForm">
      <div className="header">
        <h2>Create your account</h2>
      </div>
      <form onSubmit={generateOrder} id="form" className="form">
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={dataForm.name}
            onChange={handleChange}
            id="username"
          />
          <br></br>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
          />
          <br></br>
        </div>
        <div className="form-control">
          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            value={dataForm.phone}
            onChange={handleChange}
          />
          <br></br>
        </div>
        <button className="btn btn-primary">
          Send
        </button>
      </form>
      <Modal isOpen={isModalOpen} handleClose={() => {
        setIsModalOpen(false);
        navigate("/", { replace: true });
        emptyCart();
      }}>
        <div className="confirmationModal">
          <div className="orderModalSummery">
            <div className="orderTittleModal">Your Order</div>
            <div className="orderTextModal">
            <p>Buyer:</p>

            <p>{dataForm.name}</p>
            </div>
            <div className="totalPriceModal">
              <p>Order Total:</p>
              <p>${totalPrice()}U$</p>
            </div>
          </div>
          <div className="orderModal">
            {cartList.map((products) => (
              <div className="itemModalContainer" key={products.id}>
                <div className="itemModalInformation">
                  <div className="itemModalTittle">{`${products.brand} ${products.model}`}</div>
                  <div className="itemModalPrice">${products.price}U$</div>
                  <div className="itemModalInStock">
                    Quantity: {products.cantidad}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="textModal">
            <p>Your your purchase was successful</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AccountForm;