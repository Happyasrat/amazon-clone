import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/715HrGnPhZL._SX3000_.jpg"
          alt="#"
        />
        <h1>Deals on Amazon Devices</h1>
        <div className="home__row">
          <Product
            id="12"
            title="Hisense 50 inch Fire TV"
            price={337.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41-0fDp28qL._AC_SY200_.jpg"
          />
          <Product
            id="123"
            title="Fire TV Stick 4K Max"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/316Aw7TN4tL._AC_SY200_.jpg"
          />

          <Product
            id="1234"
            title="Insignia 39-inch Smart Fire TV"
            price={"$159.99 List Price $229.99"}
            rating={4}
            image="https://m.media-amazon.com/images/I/51NAgCtev5L._AC_SY200_.jpg"
          />
        </div>
        <h1>Best Sellers in Cell Phones & Accessories</h1>
        <div className="home__row">
          <Product
            id="12345"
            title="Ailun 3 Pack Screen Protector for iPhone 14 Pro[6.1 inch] + 3"
            price={7.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81MZ5D1wHpL._AC_SY200_.jpg"
          />
          <Product
            id="123456"
            title="Misxi 2 Pack Hard PC Case with Tempered Glass Screen Protector"
            price={10.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61wDa7Ea5TL._AC_SY200_.jpg"
          />
          <Product
            id="1234567"
            title="Wireless Charger, 3 in 1 Wireless Charging Station"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81VfBSdIPvL._AC_SY200_.jpg"
          />
        </div>
        <h1>Best Sellers in Books</h1>
        <div className="home__row">
          <Product
            id="12345678"
            title="It Ends with Us:Paperback, August 2, 2016"
            price={9.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81s0B6NYXML._AC_SY200_.jpg"
          />
          <Product
            id="123456789"
            title="8 Rules of Love: – January 31, 2023"
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_SY200_.jpg"
          />
          <Product
            id="1234560"
            title="Verity Paperback – October 26, 2021"
            price={10.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/41ZLnc34EiL._AC_SY200_.jpg"
          />
          <Product
            id="1234561"
            title="It Starts with Us: – October 18, 2022"
            price={13.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71PNGYHykrL._AC_SY200_.jpg"
          />
          <Product
            id="1234562"
            title="Lessons in Chemistry: April 5, 2022"
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71yNgTMEcpL._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home