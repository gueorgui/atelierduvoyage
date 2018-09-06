import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.css';

const Input = ({ label, text, type, id, value, handleChange }) =>
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className={style.formControl}
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
