import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={29.22}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={1}
          />
          <Product
            id="2"
            title="This big brown bear always greets you with open arms. Cuddly like no other and with a lovely giant stomach where you can feel safe resting - in other words, a real softy."
            price={9999.99}
            image="https://www.ikea.com/au/en/images/products/djungelskog-soft-toy__0710168_PE727370_S5.JPG"
            rating={10}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="If you love a cat with an exotic look but without the size and danger of a wild cat, the Bengal was developed with you in mind."
            price="little more than you have got in your glass"
            image="https://vetstreet.brightspotcdn.com/dims4/default/4f4dea1/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F31%2F1ba400a28511e087a80050568d634f%2Ffile%2FBengal-3-645mk062211.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish of Italian origin consisting of salt in water"
            price={29.22}
            image="https://cdn.upmenu.com/static/themes/7d0f92b9-94c6-11e8-9795-525400841de1/assets-190/food-1.png"
            rating={3}
          />
          <Product
            id="5"
            title="The lean startupBärenpark takes you into the world of bears, challenging you to build your own bear park. Would you like another polar bear enclosure or rather a koala* house?"
            price={7.5}
            image="https://cf.geekdo-images.com/itemrep/img/W_7m_ai2jJKmjnQr24qT6hY0Hzo=/fit-in/246x300/filters:strip_icc()/pic3486218.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Renault Clio R.S. Line 1.3 TCe 130KM EDC"
            price={9399.0}
            image="https://rozmiarfelgi.pl/img/models/renault-clio-2019-hatchback.jpg"
            rating={8}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
