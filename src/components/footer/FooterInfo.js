import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Footer.scss";

const FooterNavList = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact us",
    path: "/contact-us",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    title: "Terms and Conditions",
    path: "/t-and-c",
  },
];

const SocialMediaList = [
  {
    name: "Facebook",
    icon: "fab fa-facebook",
    path: "https://www.facebook.com/jigservdigital",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    path: "https://twitter.com/jigservdigital",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    path: "https://www.instagram.com/jigservdigital/",
  },
  {
    name: "Linkedin",
    icon: "fab fa-linkedin",
    path:
      "https://www.linkedin.com/showcase/jigserv-digital-executive-learning/",
  },
  {
    name: "Youtube",
    icon: "fab fa-youtube",
    path: "https://www.youtube.com/channel/UC8IL6-cdQf0-K4IW3h7KZLg",
  },
  {
    name: "Whatsapp",
    icon: "fab fa-whatsapp",
    path: "https://api.whatsapp.com/send?phone=919820465926",
  },
];

function FooterInfo() {
  return (
    <Box component="div" className="footer-box" py={2}>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        pb={2}
        borderBottom="1px solid white"
      >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {FooterNavList.map((menu) => {
            return (
              <Link key={menu.title} to={menu.path} className="footer-nav-link">
                {menu.title}
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" p={2}>
        <img width="160px" src="j_logo.svg" />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt={1}
      >
        <Box component="div" color="white" mx={3}>
          Follow us:
        </Box>
        <Box className="mr-3">
          {SocialMediaList.map((media) => {
            return (
              <a key={media.name} href={media.path} target="_blank" className="px-2">
                <i className={media.icon + " fa-2x text-white"}></i>
              </a>
            );
          })}
        </Box>
      </Box>
      <Box
        component="div"
        textAlign="center"
        mt={2}
        fontSize="13px"
        color="white"
      >
        ©2021 Jigserv Digital Pvt. Ltd. | All Rights Reserved
      </Box>
    </Box>
  );
}

export default FooterInfo;
