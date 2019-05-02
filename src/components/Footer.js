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
        <div className="bottom-container">
          <>© 2019 The Farmer’s Dog, Inc.Better for them, easier for you ™</>
          <>
            <h2>Privacy</h2> <h2>Terms</h2>
          </>
        </div>
      </SectionContainer>
    </>
  );
};

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  position: absolute;
  width: 100%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.grey};
  font-weight: 800;
  margin: 0;
  padding: 0;

  span {
    display: flex;
    align-items: center;
  }
  .image-container {
    display: flex;
    flex-direction: row;
  }
  .footer-container {
    display: flex;
    flex-direction: row;
  }
  .bottom-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;
    height: 60px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
`;
