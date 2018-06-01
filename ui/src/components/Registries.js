import React from 'react';

class Registries extends React.Component {
  render() {
    return (
      <div
        className="fullscreen registry-section"
        ref={r => this._registryContainer = r}
      >
        <h1>Registries</h1>
        <p>
          We are registered at Amazon and at Bed Bath &amp; Beyond.
          <br />
          Gifts are appreciated but not required.
        </p>

        <div className="registry-flex">
          <div class="left">
            <a href="https://www.amazon.com/wedding/share/mikeandalie" target="_blank">
              <img src="img/registry-amazon.jpg" />
              <p>
                Visit our Amazon Registry
              </p>
            </a>
          </div>
          <div class="right">
            <a
              href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545629397&eventType=Wedding"
              target="_blank"
            >
              <img src="img/registry-bbb.png" />
              <p>
                Visit our Bed Bath &amp; Beyond Registry
              </p>
            </a>
            <p>
              Registry #: 545629397
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Registries;
