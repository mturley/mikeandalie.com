import React from 'react';

class Registries extends React.Component {
  render() {
    return (
      <div
        className="fullscreen registry-container"
        ref={r => this._registryContainer = r}
      >
        <h1>Registries</h1>
        <p>We are registered at Amazon and at Bed Bath &amp; Beyond.</p>
        <p>
          Amazon Registry:&nbsp;
          <a href="https://www.amazon.com/wedding/share/mikeandalie" target="_blank">
            https://www.amazon.com/wedding/share/mikeandalie
          </a>
        </p>
        <p>
          Bed Bath &amp; Beyond Registry:&nbsp;
          <a href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545629397&eventType=Wedding" target="_blank">
            https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545629397&eventType=Wedding
          </a>
        </p>
      </div>
    );
  }
}

export default Registries;
