/*eslint-disable*/
import React from "react";
import Router from "next/router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { LocalOffer, History } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
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
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/samrofer"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
