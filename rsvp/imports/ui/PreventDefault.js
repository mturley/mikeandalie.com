import React from 'react';
import PropTypes from 'prop-types';

// TODO publish this beauty with pf-react

const PreventDefault = props => {
  const whoEverWantsTheDefault = event => {
    event.preventDefault();
    props.onClick(event);
  };
  // I heard href="#" was bad, but removing it does weird things.
  // TODO: learn why. Apologies to anyone who ends up reading this code.
  return (
    <a href="#" {...props} onClick={whoEverWantsTheDefault}>
      {props.children && props.children}
    </a>
  );
};

PreventDefault.propTypes = {
  onClick: PropTypes.func
};

export default PreventDefault;
