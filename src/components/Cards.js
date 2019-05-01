import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Couch from "../assets/dog-sitting-3ef6b6.jpg";
import { dogInfo, vetInfo } from "../assets/testimonials";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      vets: true,
      selected: 0
    };
    this.handleVet = this.handleVet.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleVet() {
    this.setState((prevState, nextState) => ({
      vets: !prevState.vets,
      selected: 0
    }));
  }

  handleSelect(e, num) {
    e.preventDefault();
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
            <Switcher onClick={this.handleVet}>
              <h1>VETS</h1>
            </Switcher>
            <Switcher onClick={this.handleVet}>
              <h1>DOGS</h1>
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
                            <>
                              <h2>{vet.testimony}</h2>
                              <h3> {vet.name}</h3>
                            </>
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
                            <>
                              <h2>{dog.testimony}</h2>
                              <h3> {dog.name}</h3>
                            </>
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
export { Cards };

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  }
  img {
    display: inline;
    &:active {
      border-bottom: 1px solid ${props => props.theme.salmon};
    }
  }
  h1 {
    font-size: 38px;
    font-weight: 800;
    padding-bottom: 30px;
  }
`;

export const Switcher = styled.div`
  width: 20vw;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin: 0;
  display: inline;
  &:active {
    border-bottom: 1px solid ${props => props.theme.salmon};
  }
`;
