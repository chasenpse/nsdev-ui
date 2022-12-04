import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultButton = styled.button`
  border: 0px;
  padding: 0.5em 1em;
  border: 1px solid ${props => props.primary ? props.backgroundColor : '#DDD'};
  border-radius: 4px;
  background: ${props => props.primary ? props.backgroundColor : '#DDD'};
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0,0,0,0.1);
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }) => (
  <DefaultButton type="button" {...props}>
    {label}
  </DefaultButton>
);

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  backgroundColor: '#F5D17B',
  size: 'medium',
  onClick: undefined,
};
