import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import s from "./index.module.css"

interface TProps {
  data: {
    id?: number
    src?: string
    name?: string
    price?: number
    qty?: number
    index: number
    tmpDataCart?: any
    setTmpDataCart?: any
    isRender?: boolean
    setIsRender: any
  }
}

const CardSummary = (props: TProps) => {
  const {
    id,
    src,
    name,
    price,
    qty,
    index,
    tmpDataCart,
    setTmpDataCart,
    isRender,
    setIsRender,
  } = props.data

  const style: any = {
    relative: {
      // width: "100px",
      // height: "100px",
      // position: "relative",
    },
    images: {
      // objectFit: "cover",
      // width: "100px",
      // height: "100px",
      width: "100%",
      height: "auto",
      borderRadius: "5px",
    },
    cardRowSummary: {
      marginTop: "10px",
      marginBottom: "10px",
    },
  }

  const plus = (idx: number) => {
    tmpDataCart[idx].qty = tmpDataCart[idx].qty + 1
    setTmpDataCart(tmpDataCart)
    setIsRender(!isRender)
  }
  const minus = (idx: number) => {
    if (tmpDataCart[idx].qty > 1) {
      tmpDataCart[idx].qty = tmpDataCart[idx].qty - 1
      console.log(tmpDataCart)
      setTmpDataCart(tmpDataCart)
      setIsRender(!isRender)
    } else {
      //   setIsRender(!isRender)
      let a = tmpDataCart
      a.splice(idx, 1)
      alert("apakah anda yakin akan menghapus data ini ?")
      setIsRender(!isRender)
    }
  }

  useEffect(() => {
    return () => undefined
  }, [tmpDataCart])

  return (
    <Row style={style.cardRowSummary} key={index}>
      <Col sm={12} md={12} lg={4}>
        <div style={style.relative}>
          <img
            style={style.images}
            src={src}
            alt="summary"
            width="100"
            height="100"
          />
        </div>
      </Col>
      <Col sm={12} md={12} lg={8} className={s.rightCard}>
        <Row>
          <Col>{name}</Col>
        </Row>
        <Row>
          <Col className={s.rightCardSum}>
            <div className={s.btnCardSum} onClick={() => minus(index)}>
              -
            </div>
            <div>{qty}</div>
            <div className={s.btnCardSum} onClick={() => plus(index)}>
              +
            </div>
          </Col>
          <Col className={s.price}>{price}</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CardSummary
