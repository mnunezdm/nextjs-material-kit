import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";

import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";

import styles from "styles/jss/nextjs-material-kit/pages/budgetPage.js";
import BudgetRequestForm from "../pages-sections/Budget/BudgetRequestForm.js";

const useStyles = makeStyles(styles);

export default function BudgetPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <>
      <Head>
        <title>Samrofer | Presupuesto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        color="transparent"
        brand="Reformas samrofer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image="/img/landing/v-2.jpg"
        className={classes.parallax}
      />
      <article className={classes.container}>
        <Card>
          <CardHeader>
            <h2 className={classNames(classes.cardTitle)}>
              Cuentanos un poco más...
            </h2>
          </CardHeader>
          <CardBody className={classes.paddingTopNone}>
            <BudgetRequestForm />
          </CardBody>
        </Card>
      </article>
      <Footer />
    </>
  );
}
