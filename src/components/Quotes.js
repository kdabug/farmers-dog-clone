import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Couch from "../assets/dog-sitting-3ef6b6.jpg";
import { dogInfo, vetInfo } from "../assets/testimonials";

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      vets: true,
      selected: 0
    };
    this.handleVet = this.handleVet.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleVet(e) {
    const els = document.getElementsByClassName("active");
    if (els.length) {
      els[0].classList.remove("active");
    }
    const unEls = document.getElementsByClassName("switch");
    if (unEls.length) {
      unEls[0].classList.remove("switch");
    }
    e.target.classList.toggle("switch");
    this.setState((prevState, nextState) => ({
      vets: !prevState.vets,
      selected: 0
    }));
  }

  handleSelect(e, num) {
    e.preventDefault();
    const els = document.getElementsByClassName("active");
    if (els.length) {
      console.log("this is els", els);
      els[0].classList.remove("active");
    }
    e.target.classList.toggle("active");
    this.setState((prevState, newState) => ({
      selected: num
    }));
  }

  render() {
    console.log(vetInfo);
    return (
      <>
        <SectionContainer>
          <h1>The Power of Real Food</h1>
          <div className="switch-container">
            <Switcher onClick={e => this.handleVet(e)}>
              <h2>VETS</h2>
            </Switcher>
            <Switcher onClick={e => this.handleVet(e)}>
              <h2>DOGS</h2>
            </Switcher>
          </div>
          <div className="testimony-info">
            {vetInfo && (
              <>
                {this.state.vets ? (
                  <>
                    {vetInfo.map((vet, i) => {
                      return (
                        <>
                          {i === this.state.selected && (
                            <div className="testimony">
                              <h2>"{vet.testimony}"</h2>
                              <h3> {vet.name}</h3>
                            </div>
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {dogInfo.map((dog, i) => {
                      return (
                        <>
                          {i === this.state.selected && (
                            <div className="testimony">
                              <h2>"{dog.testimony}"</h2>
                              <h3> {dog.name}</h3>
                            </div>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
                {this.state.vets ? (
                  <div className="pics">
                    {vetInfo.map((vet, i) => {
                      return (
                        <Image
                          onClick={e => this.handleSelect(e, i)}
                          height={"100px"}
                          width={"100px"}
                          src={vet.photo}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="pics">
                    {dogInfo.map((dog, i) => {
                      return (
                        <Image
                          onClick={e => this.handleSelect(e, i)}
                          height={"100px"}
                          width={"100px"}
                          src={dog.photo}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </SectionContainer>
      </>
    );
  }
}
export { Quotes };

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 500px;
  color: ${props => props.theme.grey};
  background-color: ${props => props.theme.lightgrey};
  font-weight: 800;
  padding: 80px 0;
  .pics {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .switch-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .testimony {
    width: 70%;
    margin: 0 auto;
  }
  img {
    display: inline;
    filter: grayscale(1);
    border-radius: 50%;
  }
  .active {
    filter: grayscale(0);
  }
  h1 {
    font-size: 38px;
    font-weight: 900;
    padding-bottom: 30px;
  }
  h2 {
    font-size: 20px;
    font-weight: 200;
    padding-bottom: 30px;
    line-height: 1.5;
  }
  h3 {
    font-size: 16px;
    padding-bottom: 30px;
    color: #969799
    font-family: 'Spectral', serif;
  }
`;

export const Switcher = styled.div`
  width: 20vw;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin: 0;
  display: inline;
  .switch {
    border-bottom: 3px solid ${props => props.theme.salmon};
  }
`;
