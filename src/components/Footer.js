import React from "react";
import moment from "moment";

import ContentWrapper from "./ContentWrapper";
// import SignUpForm from "./SignUpForm.js";

import mail from "../assets/img/icons/socialMail.svg";
import twitter from "../assets/img/icons/socialTwitter.svg";
import facebook from "../assets/img/icons/socialFacebook.svg";
import instagram from "../assets/img/icons/socialInstagram.svg";
import MediaQuery from "react-responsive";
import QWacksLogoTyped from "../assets/img/logo/QWacks-logo-typed.png";

import gogurt from "../assets/img/sponsors/gogurt.png";
import monkeyToaster from "../assets/img/logo/cuteMonkeyToaster.svg";

const navigateLinks = [
  // {
  //   label: "QWacks 2019",
  //   url: "https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif",
  //   dataCy: "footer-2018-link"
  // },
   {
     label: "Stupid Hacks Toronto",
     url: "http://www.stupidhackathon.com/",
     dataCy: "footer-lhd-link"
   },
  // {
  //   label: "QWacks Blog",
  //   url: "https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif",
  //   dataCy: "footer-blog-link"
  // },
  // {
  //   label: "QWacks Dashboard",
  //   url: "https://app.qwacks.io",
  //   dataCy: "footer-dashboard-link"
  // },
  // {
  //   label: "MLH Code of Conduct",
  //   url: "https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif",
  //   dataCy: "footer-mlh-code-of-conduct-link"
  // }
];

const socialLinks = [
  // {
  //   icon: mail,
  //   url: "mailto:hello@qwacks.io",
  //   label: "hello@qwacks.io",
  //   dataCy: "footer-email-link"
  // },
  // {
  //   icon: twitter,
  //   url: "https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif",
  //   label: "Follow us on Twitter",
  //   dataCy: "footer-twitter-link"
  // },
  // {
  //   icon: facebook,
  //   url: "https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif",
  //   label: "Like us on Facebook",
  //   dataCy: "footer-facebook-link"
  // },
  // {
  //   icon: instagram,
  //   url: "https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif",
  //   label: "Follow us on Instagram",
  //   dataCy: "footer-instagram-link"
  // }
];

const finePrint = {
  color: "#bebebe",
  fontSize: "12px"
};

const [smallScreens, mediumScreens, largeScreens] = [
  "@media(max-width: 950px)",
  "@media (min-width: 950px) and (max-width: 1200px)",
  "@media(min-width: 1200px)"
];

const Footer = () => (
  <footer css={{ zIndex: "4", backgroundColor: "#070b34", color: "#ffffff" }}>
    <ContentWrapper>
      <div
        css={{
          zIndex: "4",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          paddingTop: "80px",
          " h3": {
            color: "inherit",
            textTransform: "uppercase"
          },
          [smallScreens]: {
            position: "relative",
            zIndex: "2",
            display: "block",
            textAlign: "center"
          }
        }}
      >
        <div
          css={{
            zIndex: "4",
            [smallScreens]: {
              zIndex: "4",
              marginLeft: "auto",
              marginRight: "auto"
            },
            maxWidth: "455px"
          }}
        >
          <span>
            <img
              height="64px"
              src={monkeyToaster}
              css={{ marginBottom: "5px", paddingRight: "13px" }}
              alt="Monkey Toaster"
            />
            <img height="67px" src={QWacksLogoTyped} alt="QWacks Wordmark" />
          </span>
          <p
            css={{
              fontSize: "12px",
              lineHeight: "20px",
              paddingTop: "40px",
              paddingRight: "20px",
              paddingBottom: "40px",
              lineHeight: "1.67",
              [smallScreens]: { zIndex: "4", paddingLeft: "24px", paddingRight: "24px" }
            }}
          >
            QWacks is a bad idea.
          </p>
          {/* <h3>Stay Connected</h3> */}
          {/* <p
            css={{
              fontSize: "12px",
              lineHeight: "20px",
              paddingTop: "12px",
              paddingBottom: "4px"
            }}
          >
            Sign up for our mailing list for the latest updates.
          </p> */}
          <div
            css={{
              zIndex: "4",
              alignItems: "left",
              justifyContent: "left",
              display: "flex",
              marginLeft: "-8px",
              paddingBottom: "64px",
              [smallScreens]: {
                zIndex: "4",
                marginLeft: "0px",
                paddingBottom: "24px"
              }
            }}
          >
            <MediaQuery query="screen and (max-width: 950px)">
              {/* <SignUpForm
                fontSize={14}
                backgroundColor="#c81c2e"
                foregroundColor="white"
                dataCy="footer-signup-button"
                center={true}
              /> */}
            </MediaQuery>
            <MediaQuery query="screen and (min-width: 950px)">
              {/* <SignUpForm
                fontSize={14}
                backgroundColor="#c81c2e"
                foregroundColor="white"
                dataCy="footer-signup-button"
              /> */}
            </MediaQuery>
          </div>
          <div css={{ position: "relative", zIndex: "4", [smallScreens]: { display: "none" } }}>
            <p
              data-cy="footer-address"
              css={{ ...finePrint, marginBottom: "5px" }}
            >
              Queen&#39;s University | 99 University Ave, Kingston, ON
            </p>
            <a
              data-cy="footer-dev-plug"
              css={{ ...finePrint, fontWeight: "400", position: "relative", zIndex: "4" }}
              href="https://github.com/barrelmaker/qwacks-website/"
              target="_blank"
              rel="external noopener"
            >
              {"< />"} with stupidity by Queen&#39;s students
            </a>
            <p
              data-cy="footer-copyright-notice"
              css={{
                ...finePrint,
                paddingBottom: "32px",
                marginTop: "6px"
              }}
            >
              Copyright © {moment().year()} QWacks
            </p>
          </div>
        </div>
        <div
          css={{
            zIndex: "4",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "10px",
            [smallScreens]: {
              paddingTop: "10px",
              paddingBottom: "30px",
              position: "relative",
              zIndex: "4"
            }
          }}
        >
          <h3>Inspiration</h3>
          <ul
            css={{
              zIndex: "4",
              paddingTop: "30px",
              listStyleType: "none",
              ">li": { paddingBottom: "23px" },
              " a": {
                zIndex: "4",
                color: "inherit",
                fontWeight: 600,
                textDecoration: "none",
                ":hover": {
                  color: "#ed253a"
                },
                [smallScreens]: {zIndex: "4"}
              }
            }}
          >
            {navigateLinks.map(({ label, url, dataCy }) => (
              <li key={url}>
                <a href={url} data-cy={dataCy}>{`${label} ▸`}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            [largeScreens]: {
              paddingTop: "10px"
            },
            [mediumScreens]: {
              zIndex: "4",
              paddingTop: "80px"
            }
          }}
        >
          {/*<h3 css={{ [smallScreens]: { display: "none" } }}>Get in touch</h3>*/}
          <div
            css={{
              paddingTop: "30px",
              listStyleType: "none",
              ">div": { paddingBottom: "18px" },
              " a": {
                textDecoration: "none",
                textAlign: "left",
                color: "inherit",
                fontWeight: "bold"
              },
              display: "grid",
              [smallScreens]: {
                marginLeft: "auto",
                marginRight: "auto",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                maxWidth: "196px",
                paddingTop: "0px",
                paddingBottom: "60px"
              }
            }}
          >
            {socialLinks.map(({ icon, label, url, dataCy }) => (
              <div
                key={url}
                css={{
                  zIndex: "4",
                  display: "grid",
                  gridTemplateColumns: "min-content auto",
                  ":hover": {
                    " a": {
                      color: "#ed253a",
                      ">div": {
                        backgroundColor: "#ed253a"
                      }
                    }
                  },
                  [smallScreens]: {
                    zIndex: "4",
                    display: "block",
                    width: "40px",
                    height: "40px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }
                }}
              >
                <a aria-label={label} href={url} css={{}}>
                  <div
                    css={{
                      backgroundColor: "#e3e3e3",
                      mask: `url(${icon}) no-repeat center center`,
                      maskSize: "100% 100%",
                      width: "28px",
                      height: "28px",
                      marginRight: "16px",
                      marginTop: "-5px",
                      ":hover": {
                        backgroundColor: "#ed253a"
                      },
                      [smallScreens]: {
                        zIndex: "4",
                        width: "40px",
                        height: "40px"
                      }
                    }}
                  />
                </a>
                <a
                  css={{ [smallScreens]: { display: "none" } }}
                  href={url}
                  data-cy={dataCy}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          css={{
            [largeScreens]: { position: "relative", zIndex: "4", display: "none" },
            [mediumScreens]: { position: "relative", zIndex: "4", display: "none" }
          }}
        >
          <p
            data-cy="footer-address"
            css={{ ...finePrint, marginBottom: "5px" }}
          >
            Queen&#39;s University | 99 University Ave, Kingston, ON
          </p>
          <a
            data-cy="footer-dev-plug"
            css={{ ...finePrint, position: "relative", zIndex: "4", fontWeight: "400" }}
            href="https://github.com/barrelmaker/qwacks-website/"
            target="_blank"
            rel="external noopener"
          >
            {"< />"} with ♡ by Queen&#39;s students
          </a>
          <p
            data-cy="footer-copyright-notice"
            css={{ ...finePrint, marginTop: "6px", paddingBottom: "32px" }}
          >
            Copyright © {moment().year()} QWacks
          </p>
        </div>
      </div>
    </ContentWrapper>
  </footer>
);

export default Footer;
