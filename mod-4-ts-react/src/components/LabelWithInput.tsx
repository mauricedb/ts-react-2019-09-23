import React, { ChangeEvent } from "react";
import PropTypes from "prop-types";

type Props<T extends { [key: string]: string }> = {
  label: string;
  name: keyof T;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  props?: {};
};

function LabelWithInput<T extends { [key: string]: string }>({
  label,
  name,
  value,
  onChange,
  props
}: Props<T>) {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name as string}
        value={value}
        {...props}
        onChange={onChange}
      />
    </div>
  );
}

LabelWithInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default LabelWithInput;
