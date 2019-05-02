import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Present from "../assets/present-fill-white-712ea7.png";

export const Footer = props => {
  return (
    <>
      <SectionContainer scrolled={window.pageYOffset == 0}>
        <div>
          <div className="image-container">
            <Image height={"40px"} width={"40px"} src={Present} />
            <FooterItems>
              <h3>FAQ</h3>
              <h3>Log In</h3>
              <h3>Sign Up</h3>
              <h3>DIY</h3>
              <h3>Careers</h3>
              <h3>Veterinarian Portal</h3>
            </FooterItems>
            <FooterItems>
              <h3>CONTACT</h3>
              <h3>help@thefarmersdog.com</h3>
              <h3>9646)-780-7957</h3>
              <h3>Instagram</h3>
              <h3>Facebook</h3>
            </FooterItems>
            <FooterItems>
              <h3>FREE HEALTH AND NUTRITION TIPS</h3>
            </FooterItems>
          </div>
          <h2>
            OUR FOOD IS MADE WHILE PLAYING DOO-WOP TUNES, ALL WITH ❤ IN THE US{" "}
          </h2>
        </div>
        <div>
          <div>
            © 2019 The Farmer’s Dog, Inc.Better for them, easier for you ™
          </div>
          <div>
            <h2>Privacy</h2> <h2>Terms</h2>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  width: 100%;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme.grey};
  font-weight: 800;
  margin: 0;
  padding: 0;
  z-index: 20;
  span {
    display: flex;
    align-items: center;
  }
  .footer-container {
    display: flex;
    flex-direction: row;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 20px;
  }
`;
