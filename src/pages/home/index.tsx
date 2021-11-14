import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import s from "./index.module.css"

import emptyCart from "../../assets/empty-cart.png"

import menu from "../../assets/menu.png"
import fork from "../../assets/fork.png"
import history from "../../assets/history.png"
import add from "../../assets/add.png"
import searchIcon from "../../assets/search-icon.png"

import CardProduct from "../../components/card-product"
import CardSummary from "../../components/card-summary"
import dataProduct from "../../json/data-product.json"

interface IDataCart {
  id?: number
  name?: string
  src?: string
  price?: number
  qty?: number
}
const Home = () => {
  const [tmpDataCart, setTmpDataCart] = useState<IDataCart[]>([])
  const [isRender, setIsRender] = useState<boolean>(false)

  useEffect(() => {
    return () => undefined
  }, [tmpDataCart])

  const menus = [
    {
      icon: fork,
      title: "menu product",
    },
    {
      icon: history,
      title: "menu history",
    },
    {
      icon: add,
      title: "menu add",
    },
  ]

  return (
    <Container fluid>
      <Row>
        <Col xs={9}>
          <Row className={s.rows}>
            <Col>
              <div className={s.sidebar}>
                <img src={menu} alt="menu" />
              </div>
            </Col>
            <Col className={s.headerTitle}>Food Items</Col>
            <Col className={s.searchIcon}>
              <img src={searchIcon} alt="search icon" />
            </Col>
          </Row>
          <Row className={s.content}>
            <div className={s.sidebar}>
              {menus.map((item, index) => (
                <div className={s.menuSidebar}>
                  <img src={item.icon} alt={item.title} />
                </div>
              ))}
            </div>
            <Col className={s.contentProduct}>
              <Row className={s.product}>
                {dataProduct.map((item, index) => (
                  <Col md={6} lg={4} key={index}>
                    <CardProduct
                      data={{ ...item, tmpDataCart, setTmpDataCart }}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <Row className={s.heightSideCart}>
            <Col className={s.sideCart}>
              <div className={s.cart}>Cart</div>
              <div className={s.notice}>{tmpDataCart.length}</div>
            </Col>
          </Row>
          {tmpDataCart.length > 0 ? (
            <Row className={s.heightCart}>
              <Col md={12} className={s.topCart}>
                {tmpDataCart.map((item, index) => (
                  <CardSummary
                    data={{
                      ...item,
                      index,
                      tmpDataCart,
                      setTmpDataCart,
                      isRender,
                      setIsRender,
                    }}
                    key={index}
                  />
                ))}
              </Col>
              <Col md={12} className={s.bottomCart}>
                <Row>
                  <Col md={6}>Total :</Col>
                  <Col md={6}>Rp. 105.000*</Col>
                  <Col md={12}>*Belum termasuk ppn</Col>
                  <Col md={12}>
                    <button className={`${s.btn} ${s.btnCheckout}`}>
                      Checkout
                    </button>
                  </Col>
                  <Col md={12}>
                    <button className={`${s.btn} ${s.btnCancel}`}>
                      Cancel
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : (
            <Row className={"text-center"}>
              <Col>
                <div>
                  <img src={emptyCart} alt="empty cart icon" />
                </div>
                <div className={s.emptyCartTxt1}>Your cart is empty</div>
                <div className={s.emptyCartTxt2}>
                  Please add some items from the menu
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
