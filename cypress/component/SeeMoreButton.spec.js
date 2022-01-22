/// <reference types="cypress" />
import { mount } from "@cypress/react";
import SeeMoreBtn from "../../src/components/SeeMoreBtn";

describe("Custom Button", () => {
  beforeEach(() => {
    mount(<SeeMoreBtn />);
  });

  it("should render the button", () => {
    cy.get("button").should("be.visible");
  });

  it("should render the button with the correct text", () => {
    cy.get("button").contains("Ver mais");
  });

  it("it should have the right background color", () => {
    cy.get("button").should("have.css", "background-color", "rgb(242, 187, 5)");
  });
});
