/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { LocalOffer, History, WhatsApp, Instagram } from "@material-ui/icons";

// core components
import Button from "../CustomButtons/Button.js";

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
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Instagram className={classes.icons} />
      {showAt && <span className={classes.navLinkText}>@samrofer</span>}
    </Button>
  );
}

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/obras" passHref>
          <Button className={classes.navLink} color="transparent">
            <History className={classes.icons} /> Obras
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/presupuesto" passHref>
          <Button className={classes.navLink} color="transparent">
            <LocalOffer className={classes.icons} /> Solicitar Presupuesto
          </Button>
        </Link>
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
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <WhatsApp className={classes.icons} />
        </Button>
      </ListItem>
    </List>
  );
}
