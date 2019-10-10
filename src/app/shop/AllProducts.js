import React, { Component } from "react";
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
            let imageAlt = "A bouquet of flowers"
            let imageUrl =
            "//images.ctfassets.net/28s4t9brspwb/1bL78zLTxkA1yKyqvI907T/9d130c3bf51e7113e906c238cbfa1e6f/Screenshot_2019-10-10_at_11.57.11.png"; // Placeholder url
          const imageId = item.fields.image.sys.id // Find item fields id
          const imageData = assets.find(asset => {
            return asset.sys.id === imageId; // Return assets obj with asset.id matching fields.id
          });
          if (imageData) {
            imageUrl = imageData.fields.file.url; // If match, url set imageUrl from matching object
            imageAlt = imageData.fields.description;
          }
          item.fields.image = imageUrl; // Set fields image with useable image url
          item.fields.alt = imageAlt;
          return item.fields; // Return fields object
        });
        this.setState({
          productData: filteredData
        });
      })
      .catch(error => console.log(error));
  }

  renderItems = () => {
    return this.state.productData.map((product, index) => (
      <div className="column is-4">
        <Product key={index} productData={product} />
      </div>
    ));
  };

  render() {
    return <div class="columns">{this.renderItems()}</div>;
  }
}

export default AllProducts;
