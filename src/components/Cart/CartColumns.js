import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
          <div className="container-fluid text-center d-none d-lg-block">
            <div className="row ">
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase text-blue">products</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase text-blue">name of product</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase text-blue">price</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase text-blue">quantity</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase text-blue">remove</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase text-blue">total</p>
              </div>
            </div>
          </div>
        );
      }
}
