/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {
  LocalOffer,
  History,
  WhatsApp,
  Instagram,
  Phone,
} from "@material-ui/icons";

// core components
import Button from "../CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export function InstagramLink(props) {
  const { showAt, buttonClass, igSamrofer } = props;
  const classes = useStyles();

  return (
    <Button
      color="transparent"
      href={`https://www.instagram.com/${igSamrofer}`}
      target="_blank"
      className={buttonClass}
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Instagram className={classes.icons} />
      {showAt && <span className={classes.navLinkText}>@{igSamrofer}</span>}
    </Button>
  );
}

export default function HeaderLinks(props) {
  const { igSamrofer, telSamrofer } = props;

  const classes = useStyles();

  const wassapFormat = (tel = "") =>
    (tel || "").split(" ").join("").split("+").join("");

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
        <InstagramLink
          showAt={true}
          buttonClass={classes.navLink}
          igSamrofer={igSamrofer}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href={`https://wa.me/${wassapFormat(telSamrofer)}`}
          target="_blank"
          className={classes.navLink}
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <WhatsApp className={classes.icons} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href={`tel:${telSamrofer}`}
          target="_blank"
          className={classes.navLink}
          rel="noopener noreferrer"
          aria-label="Phone"
        >
          <Phone className={classes.icons} />
          <span className={classes.navLinkText}>{telSamrofer}</span>
        </Button>
      </ListItem>
    </List>
  );
}
