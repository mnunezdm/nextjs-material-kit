import React from "react";
import Router from "next/router";

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { LocalOffer, SquareFoot, Gavel } from "@material-ui/icons";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contigo de principio a fin</h2>
          <h5 className={classes.description}>
            Te ayudamos a noseque y a nosecuantos
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Diseño iterativo"
              description=""
              icon={SquareFoot}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Presupuesto"
              description="Presupuesto sin compromiso y ajustado a tus necesidades"
              icon={LocalOffer}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Obra"
              description="Con la máxima, el último paso a tu obra terminada"
              icon={Gavel}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <Button
          href="obras"
          className={classNames(classes.navLink, classes.marginVerticalSmall)}
          onClick={(e) => {
            e.preventDefault();
            Router.push("/presupuesto");
          }}
        >
          ¡Solicitar Presupuesto!
        </Button>
      </div>
    </div>
  );
}
