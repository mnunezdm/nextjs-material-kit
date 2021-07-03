import React, { useEffect, useState } from "react";
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

import WorkProvider from "../shared/providers/works.js";

const useStyles = makeStyles(styles);

import ImageGallery from "react-image-gallery";

export default function WorksPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [works, setWorks] = useState([]);

  useEffect(() => {
    setWorks(WorkProvider.getWorks());
  }, []);

  return (
    <div>
      <Head>
        <title>Samrofer | Obras</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        color="transparent"
        brand="Reformas samrofer"
        fixed
        changeColorOnScroll={{
          height: 200,
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
              <h2 className={classes.title}>Trabajos Anteriores</h2>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <section className={classes.container}>
        {works.map((work) => (
          <Card key={work.id}>
            <CardHeader>
              <h3 className={classNames(classes.cardTitle)}>{work.title}</h3>
            </CardHeader>
            <CardBody className={classes.paddingTopNone}>
              <p>{work.description}</p>
              {work.images && work.images.length ? (
                <div className={classes.imageContainer}>
                  <ImageGallery items={work.images} lazyLoad={true} />
                </div>
              ) : (
                ""
              )}
            </CardBody>
          </Card>
        ))}
      </section>
      <Footer />
    </div>
  );
}
