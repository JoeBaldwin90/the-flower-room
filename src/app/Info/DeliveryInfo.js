import React from "react";

const DeliveryInfo = () => (
  <div>
    <section className="hero is-info is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">How to order</h1>
          <p className="subtitle">
            You can call us on{" "}
            <strong>
              <a href="tel:02088760646" className="link">
                020 8876 0646
              </a>
            </strong>
            , or email us at{" "}
            <strong>
              <a
                href="mailto:theflowerroom@gmail.com?Subject=Hello%there"
                target="_top"
                className="link"
              >
                theflowerroom@gmail.com
              </a>
            </strong>
          </p>
        </div>
      </div>
    </section>

    <div class="">
      <div class="notification">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <h1 className="title">Delivery</h1>
              <p className="subtitle">
                We can deliver on the same day or within 3 hours for local
                clients, but we also ship worldwide.
              </p>
            </div>
            <div class="tile is-child box">
              <h1 className="title">Opening Hours</h1>
              <p className="subtitle">
                Mon- Fri: 09:00 - 17:00 <br />
                Sat - Sun: 10:00 - 16:00
              </p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <h1 className="title">Where to find us</h1>
              <p className="subtitle">
                <b>44 White Hart Ln</b> <br />
                Barnes
                <br />
                London
                <br />
                SW13 0PZ
              </p>
              <p>
                <a
                  href="https://goo.gl/maps/7eKvunm47VysXURw7"
                  className="link"
                >
                  Find us on Google Maps
                </a>
              </p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <figure className="image is-1by1">
                <img
                  src="https://theflowerroombarnes.s3.eu-west-2.amazonaws.com/Screenshot+2019-10-10+at+23.47.59.png"
                  alt="Betty"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DeliveryInfo;
