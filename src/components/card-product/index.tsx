import React from "react";
import { Card } from "react-bootstrap";
import s from "./index.module.css";
import img from "../../assets/add.png";

type TTmpDataCart = {
  id: number;
  src: string;
  name: string;
  price: number;
};

interface TProps {
  data: {
    id: number;
    src: string;
    name: string;
    price: number;
    tmpDataCart: any;
    setTmpDataCart: any;
  };
}

const CardProduct = (props: TProps) => {
  const { id, name, price, src, tmpDataCart, setTmpDataCart } = props.data;

  const addToCart = (id: string) => {
    const a = tmpDataCart.find((e: any) => e.id === id);
    if (a) {
      const tmpData = tmpDataCart.filter((e: any) => e.id !== id);
      setTmpDataCart(tmpData);
    } else {
      setTmpDataCart([
        ...tmpDataCart,
        { id, name, price, src, qty: 1, total: price },
      ]);
    }

    document.getElementById(id)!.classList.toggle(s.active);
  };

  return (
    <Card style={{ marginBottom: "10px", border: "none" }}>
      <div id={id.toString()} onClick={() => addToCart(id.toString())}>
        <Card.Img
          style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
          variant="top"
          src={src}
          alt="image product"
        />
      </div>
      {/* <div className={s.checked} id="checked">
        <img src={img} alt="" />
      </div> */}
      <Card.Body
        style={{ padding: "0", background: "rgba(190, 195, 202, 0.3)" }}
      >
        <div>{name}</div>
        <div>{price}</div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
