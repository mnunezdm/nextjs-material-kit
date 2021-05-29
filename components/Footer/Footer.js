/*eslint-disable*/
import React from "react";
import Link from "next/link";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:eduardo.nunez@samrofer.com"
                className={classes.block}
                target="_blank"
              >
                Contactanos
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; 2021, made with <Favorite className={classes.icon} /> by{" "}
          <Link
            href="https://mnunezdm.com"
            className={aClasses}
            target="_blank"
            rel="noopener"
          >
            mnunezdm
          </Link>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
