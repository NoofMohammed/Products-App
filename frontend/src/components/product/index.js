import axios from "axios";
import React, { useEffect, useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import "./product.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        setProduct(result.data);
        console.log(result, "result");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product, "fiiires");

  const add = (name) => {
    cart[name] = !cart[name] ? (cart[name] = 1) : cart[name] + 1;
    setCart({ ...cart });
    console.log(cart, "ooo");
  };
  const Subtract = () => {
    setCart(cart - 1);
  };
  const getTotal = (count, price) => {
    const total = count ? count * +price.replace("JD", "") : 0;
    return total;
  };
  const FinalTotal = (name) => {
    cart[name] = !cart[name] ? (cart[name] = 1) : cart[name] + 1;
    setCart({ ...cart });
    console.log(cart, "{{}}");
  };
  const showProduct = product.map((elem, i) => {
    // console.log(elem, "gggggg=======gggggggggggggg");

    return (
      <div key={elem.id}>
        <div className="card">
          <img className="card-img-top" src={elem.image} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">{elem.name}</h4>
            <p className="card-text">Description: {elem.description}</p>
            <ul>
              <li>Type: {elem.type}</li>
              <li>Size: {elem.size}</li>
              <li>Price: {elem.price}</li>
            </ul>
            {/* <a href="#" className="btn btn-primary">
            See Profile
          </a> */}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart2"
              viewBox="0 0 16 16"
              onClick={() => setCart(cart * elem.price.replace("JD", ""))}
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cloud-minus"
              viewBox="0 0 16 16"
              onClick={Subtract}
            >
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
              <path d="M6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
            </svg>
            <PlusCircleFill cursor="pointer" onClick={() => add(elem.name)} />

            <h3>{getTotal(cart[elem.name], elem.price)}JD</h3>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>{showProduct}</div>
      <button type="submit" className="btn btn-primary" onClick={FinalTotal}>
        FinalTotal
      </button>
    </>
  );
};
export default Product;
