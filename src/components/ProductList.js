import React, { Component } from 'react'
import Title from "./Title";
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context'
import Product from './Product';
import Carousel from "../Carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ProductList extends Component {
   state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
          <Carousel />
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;