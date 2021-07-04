import React, { useState } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

import {
  People,
  Email,
  Send,
  Phone,
  Home,
  Build,
  DateRange,
} from "@material-ui/icons";

import Button from "../../components/CustomButtons/Button.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomSelect from "../../components/CustomInput/CustomSelect.js";

import styles from "../../styles/jss/nextjs-material-kit/pages/budgetPage.js";

import { DATE, TYPES } from "../../shared/constants/refurbishment.js";
import { generateEmail } from "../../shared/libs/budgetRequest.js";

const useStyles = makeStyles(styles);

export default function BudgetRequestForm(props) {
  const classes = useStyles();
  const [state, setState] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();

    open(`mailto:${props.mail}?${generateEmail(state)}`);
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="on" onSubmit={onSubmit}>
      <CustomInput
        labelText="Nombre"
        id="first"
        formControlProps={{
          fullWidth: true,
          required: true,
        }}
        inputProps={{
          onChange: handleChange,
          type: "text",
          name: "name",
          autoComplete: "name",
          required: true,
          endAdornment: (
            <InputAdornment position="end">
              <People className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
      <CustomInput
        labelText="E-Mail"
        id="email"
        formControlProps={{
          fullWidth: true,
          required: true,
        }}
        inputProps={{
          onChange: handleChange,
          type: "email",
          name: "email",
          autoComplete: "email",
          required: true,
          endAdornment: (
            <InputAdornment position="end">
              <Email className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
      <CustomInput
        labelText="Telefono"
        id="phone"
        formControlProps={{
          fullWidth: true,
          required: true,
        }}
        inputProps={{
          onChange: handleChange,
          type: "tel",
          name: "tel",
          autoComplete: "tel",
          required: true,
          endAdornment: (
            <InputAdornment position="end">
              <Phone className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
      <CustomInput
        labelText="Dirección aproximada"
        id="address"
        formControlProps={{
          fullWidth: true,
          required: true,
        }}
        helpText="¡No necesitamos la dirección exacta!"
        inputProps={{
          onChange: handleChange,
          type: "text",
          name: "address",
          required: true,
          endAdornment: (
            <InputAdornment position="end">
              <Home className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
      <CustomSelect
        labelText="Tipo de Reforma"
        id="type"
        formControlProps={{
          fullWidth: true,
          required: true,
        }}
        selectValues={Object.keys(TYPES).map((type) => ({
          value: type,
          label: TYPES[type],
        }))}
        customOnChange={handleChange}
        inputProps={{
          required: true,
          name: "type",
          endAdornment: (
            <InputAdornment position="end">
              <Build className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
      <CustomSelect
        labelText="Fecha de la obra"
        id="type"
        formControlProps={{
          fullWidth: true,
          required: true,
        }}
        selectValues={Object.keys(DATE).map((type) => ({
          value: type,
          label: DATE[type],
        }))}
        customOnChange={handleChange}
        inputProps={{
          required: true,
          name: "date",
          endAdornment: (
            <InputAdornment position="end">
              <DateRange className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
      <CustomInput
        labelText="Cuentanos un poco más"
        id="text"
        formControlProps={{
          fullWidth: true,
          required: true,
        }}
        inputProps={{
          onChange: handleChange,
          type: "text",
          required: true,
          name: "comments",
          multiline: true,
          endAdornment: (
            <InputAdornment position="end">
              <Home className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.marginVerticalSmall}>
        <Button fullWidth={true} type="submit">
          <Send className={classes.inputIconsColor} />
          Enviar
        </Button>
      </div>
    </form>
  );
}
