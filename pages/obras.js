import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import { Grid } from "@material-ui/core";

import Parallax from "../components/Parallax/Parallax.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";

import styles from "styles/jss/nextjs-material-kit/pages/worksPage.js";

const useStyles = makeStyles(styles);

export default function WorksPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const works = [
    {
      title: "Obra 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus doloribus eligendi odio libero, magni neque. Ut saepe voluptas est nostrum asperiores! Necessitatibus sunt, fuga dolorem eligendi amet cumque quia dolorum.",
      images: [],
    },
    {
      title: "Obra 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus doloribus eligendi odio libero, magni neque. Ut saepe voluptas est nostrum asperiores! Necessitatibus sunt, fuga dolorem eligendi amet cumque quia dolorum.",
      images: [],
    },
    {
      title: "Obra 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus doloribus eligendi odio libero, magni neque. Ut saepe voluptas est nostrum asperiores! Necessitatibus sunt, fuga dolorem eligendi amet cumque quia dolorum.",
      images: [],
    },
  ];

  return (
    <div>
      <Head>
        <title>Samrofer | Obras</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        color="transparent"
        brand="samrofer"
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image="/img/landing/v-1.jpg"
        className={classes.parallax}
      >
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Anteriores trabajos</h1>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <Grid
        container
        style={{ padding: 20, alignItems: "center" }}
        direction="column"
        spacing={4}
      >
        {works.map((work) => (
          <Grid item xs={12} sm={12} md={10}>
            <Card>
              <CardHeader>
                <h2 className={classNames(classes.cardTitle)}>{work.title}</h2>
              </CardHeader>
              <CardBody>
                <p>{work.description}</p>
              </CardBody>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
}
