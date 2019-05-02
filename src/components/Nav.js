import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import WordMark from "../assets/awordmark.png";
import Present from "../assets/present-fill-white-712ea7.png";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset >= 70) {
      this.setState((state, props) => ({ scrolled: true }));
    } else if (window.pageYOffset <= 70) {
      this.setState((state, props) => ({ scrolled: false }));
    }
  }
  render() {
    console.log("state", this.state.scrolled);
    return this.state.scrolled ? (
      <NavContainer scrolled={this.state.scrolled}>
        <Image src={WordMark} height={"28px"} width={"250px"} />
        <NavItems>
          <h3>FAQ</h3>
          <h3>LOG IN</h3>
          <Button width={"147px"} scrolled={this.state.scrolled}>
            <p>REDEEM 50% OFF</p>
          </Button>
        </NavItems>
      </NavContainer>
    ) : (
      <NavContainer scrolled={this.state.scrolled}>
        <span>
          <Image height={"40px"} width={"40px"} src={Present} />
          You've been gifed 20% off your first purchase
        </span>
        <NavItems>
          <h3>FAQ</h3>
          <h3>LOG IN</h3>
          <Button width={"147px"} scrolled={this.state.scrolled}>
            <p>USE YOUR DISCOUNT NOW</p>
          </Button>
        </NavItems>
      </NavContainer>
    );
  }
}

export { Nav };

export const NavContainer = styled.section`
  display: flex;
  letter-spacing: 1px;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  width: 100%;
  font-size: 13px;
  position: ${props => props.scrolled && "fixed"}
  color: ${props => (props.scrolled ? props.theme.grey : props.theme.white)};
  background-color: ${props =>
    props.scrolled ? props.theme.white : props.theme.salmon};
  font-weight: 800;
  margin: 0;
  padding: 0;
  z-index: 20;
  ${"" /* opacity: ${props => (props.scrolled ? 0 : 1)}; */}
  transition: opacity 1s;
  span {
    color: ${props => (props.scrolled ? props.theme.grey : props.theme.white)};
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  h3 {
    color: ${props => (props.scrolled ? props.theme.grey : props.theme.white)};
    margin: 20px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
`;
