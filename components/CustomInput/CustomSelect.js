import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select } from "@material-ui/core";

import styles from "styles/jss/nextjs-material-kit/components/customInputStyle.js";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CustomSelect(props) {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    customOnChange,
    success,
    selectValues,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

  const onChange = (event) => {
    setValue(event.target.value);
    customOnChange && customOnChange(event);
  };

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Select
        classes={{
          disabled: classes.disabled,
        }}
        id={id}
        className={classes.marginTopNone}
        value={value}
        {...inputProps}
        onChange={onChange}
      >
        {(selectValues || []).map((value) => (
          <MenuItem key={value.value} value={value.value}>
            {value.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

CustomSelect.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  selectValues: PropTypes.array,
};
