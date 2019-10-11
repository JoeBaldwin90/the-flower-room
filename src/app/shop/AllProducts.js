import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product";

class AllProducts extends Component {
  state = {
    productData: []
  };

  UNSAFE_componentWillMount() {
    const spaceId = "28s4t9brspwb";
    const envId = "master";
    const apiKey = "ea1fM7QlXrHQKmP8PNdmG-OYEgExAisGOWq49w4EObo";
    const endPoint = `https://cdn.contentful.com/spaces/${spaceId}/environments/${envId}/entries?access_token=${apiKey}`;

    fetch(endPoint)
      .then(response => response.json())
      .then(data => {
        const assets = data.includes.Asset;
        const filteredData = data.items.map(item => {
          let imageUrl = "";
          let imageAlt = "";
          let imageId = "";
          // Find item fields id if it exists
          if (item.fields.image) {
            imageId = item.fields.image.sys.id;
          }
          // Return the asset object with an asset.id matching the fields.id
          const imageData = assets.find(asset => {
            return asset.sys.id === imageId;
          });
          // If there is a match, use the imageData to set imageUrl & imageAlt
          if (imageData) {
            imageUrl = imageData.fields.file.url;
            imageAlt = imageData.fields.description;
          }
          // Declare custom key/values for the item object
          item.fields.image = imageUrl;
          item.fields.alt = imageAlt;

          return item.fields;
        });
        // Store the custom item.fields object in the state
        this.setState({
          productData: filteredData
        });
      })
      .catch(error => console.log(error));
  }

  renderItems = () => {
    return this.state.productData.map((product, index) => (
      <div className="column is-one-third">
        <Product key={index} productData={product} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <section class="section">
          <div class="container">
            <div class="columns is-multiline">{this.renderItems()}</div>
          </div>
        </section>
        <section class="hero is-info is-bold">
          <NavLink to="/info" id="delivery-info">
            <div class="hero-body">
              <div class="container info-block">
                <h1 className="title">
                  How to order
                  <span className="icon subtitle" style={{ marginLeft: 20 }}>
                    <i className="fas fa-info"></i>
                  </span>
                </h1>
                <h2 className="subtitle">
                  <strong>& Delivery info</strong>
                </h2>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default AllProducts;
