/*eslint-disable*/
import React from "react";
import Router from "next/router";

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { LocalOffer, History } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export function InstagramLink(props) {
  const { showAt, buttonClass } = props;
  const classes = useStyles();

  return (
    <Button
      color="transparent"
      href="https://www.instagram.com/samrofer"
      target="_blank"
      className={buttonClass}
    >
      <i
        className={classNames(
          classes.socialIcons,
          classes.navLinkIcon,
          "fab fa-instagram"
        )}
      />
      {showAt && <span className={classes.navLinkText}>@samrofer</span>}
    </Button>
  );
}

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="obras"
          className={classes.navLink}
          onClick={(e) => {
            e.preventDefault();
            Router.push("/obras");
          }}
          color="transparent"
        >
          <History className={classes.icons} /> Obras
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="presupuesto"
          className={classes.navLink}
          onClick={(e) => {
            e.preventDefault();
            Router.push("/presupuesto");
          }}
          color="transparent"
        >
          <LocalOffer className={classes.icons} /> Solicitar Presupuesto
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <InstagramLink showAt={true} buttonClass={classes.navLink} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://wa.me/34600000000"
          target="_blank"
          className={classes.navLink}
        >
          <i
            className={classNames(
              classes.socialIcons,
              classes.navLinkIcon,
              "fab fa-whatsapp"
            )}
          />
        </Button>
      </ListItem>
    </List>
  );
}
