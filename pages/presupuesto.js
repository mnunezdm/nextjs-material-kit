import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import {
  People,
  Email,
  Send,
  Phone,
  Home,
  Build,
  DateRange,
} from "@material-ui/icons";
// core components
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Button from "../components/CustomButtons/Button.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";

import CustomInput from "../components/CustomInput/CustomInput.js";
import CustomSelect from "../components/CustomInput/CustomSelect.js";
import styles from "styles/jss/nextjs-material-kit/pages/budgetPage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const onSubmit = (event) => {
    event.preventDefault();

    console.log(state);
  };

  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <div>
      <Header
        color="transparent"
        brand="samrofer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/profile-bg.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <form autoComplete="on" onSubmit={onSubmit}>
          <div
            className={classNames(
              classes.container,
              classes.paddingBottomlLarge
            )}
          >
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <h2
                  className={classNames(
                    classes.title,
                    classes.marginVerticalSmall
                  )}
                >
                  Cuentanos un poco más...
                </h2>
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
                  selectValues={[
                    { value: "full", label: "Reforma Integral" },
                    { value: "kitchen", label: "Cocina/Baños" },
                    { value: "later", label: "En mas de un mes" },
                  ]}
                  inputProps={{
                    onChange: handleChange,
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
                  selectValues={[
                    { value: "now", label: "Cuanto Antes" },
                    { value: "soon", label: "En un mes" },
                    { value: "later", label: "En mas de un mes" },
                  ]}
                  inputProps={{
                    onChange: handleChange,
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
              </GridItem>
            </GridContainer>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
