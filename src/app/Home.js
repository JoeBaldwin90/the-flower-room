import React from "react";

const Home = () => (
  <div>
    <section class="hero is-white is-large is-bold" id="homepage-hero">
      <div class="hero-body">
        <div class="container">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading is-black">Welcome to</p>
                <p class="title">The Flower Room</p>
                <p class="heading is-black">Barnes</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <section className="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Located in leafy Barnes, SW13.</h1>
          <div>
            <p className="subtitle">
              In our store you'll find an abundance of{" "}
              <strong>beautiful flowers</strong> complemented with old stone
              pots, beautiful vases and <strong>garden accessories</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-8">
            <div class="column">
              <h1 class="title is-size-4">Delivery</h1>
              <p className="subtitle">
                You can place an oder by phone or email. Or, escape to the
                tranquillity of The Flower Room and meet our artistic team of
                florists who will personalise your order. To meet our clients
                every need we can <strong>deliver on the same day</strong> or,
                in London, within 3 hours.
              </p>
            </div>
            <div class="column">
              <h1 class="title is-size-4">Corporate</h1>
              <p className="subtitle">
                Our corporate clients look to us to install a{" "}
                <strong>stylish</strong> weekly arrangement to compliment their
                workplace; we work hard to be up to date with the latest trends
                and fashions.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;

            
          