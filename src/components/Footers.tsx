import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 40px 0;
  overflow: hidden;
  border-top: 1px solid grey;
  margin-top: 50px;
`;

const FooterItem = styled.div`
  margin-right: -12px;
  margin-left: -12px;
  font-size: 0;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 40px;
  margin: auto;
`;

const FooterCategory = styled.div`
  display: inline-table;
  @media screen and (max-width: 555px) {
    width: 100%;
  }

  padding-left: 30px;
  vertical-align: top;
  width: 25%;

  h2 {
    height: 20px;
    font-size: 14px;
    margin-bottom: 20px;

    @media screen and (max-width: 555px) {
      font-size: 40px;
      height: 30px;
    }
  }

  a {
    display: block;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

const Copyright = styled.p`
  margin: 1.5rem 0;
  font-size: 15px;
  font-weight: bold;
`;

export const Footers = (): JSX.Element => {
  return (
    <Footer>
      <FooterContainer>
        <FooterItem>
          <FooterCategory>
            <h2>
              <FormattedMessage id="Menu" />
            </h2>
            <a href="/about">
              <FormattedMessage id="About" />
            </a>
            <a href="/project">
              <FormattedMessage id="Projects" />
            </a>
          </FooterCategory>
          <FooterCategory>
            <h2>
              <FormattedMessage id="MyApp" />
            </h2>
            <a href="https://deutschkihun.xyz/">@deutschkihun.xyz</a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://blog-deutschkihun.vercel.app/"
            >
              @deutschkihun/techblog
            </a>
          </FooterCategory>
          <FooterCategory>
            <h2>
              <FormattedMessage id="Repository" />
            </h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/package/@deutschkihun/ui"
            >
              DUI (Deutschkihun UI)
            </a>
          </FooterCategory>
          <FooterCategory>
            <h2>
              <FormattedMessage id="Social Network" />
            </h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/deutschkihun"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kihun-kim-b35b73174/"
            >
              Linkedin
            </a>
          </FooterCategory>
        </FooterItem>
        <Copyright>
          <a href="https://github.com/deutschkihun/ui">
            <FormattedMessage id="Design" />
          </a>
        </Copyright>
        <Copyright>
          <FormattedMessage id="Copyright" />
        </Copyright>
      </FooterContainer>
    </Footer>
  );
};
