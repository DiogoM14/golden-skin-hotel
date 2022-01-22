/// <reference types="cypress" />
import { mount } from "@cypress/react";
import AuthButtons from "../../src/components/Header/AuthButtons";

describe("Auth Buttons", () => {
  beforeEach(() => {
    mount(<AuthButtons />);
  });

  it("should render 2 buttons", () => {
    cy.get("button").should("have.length", 2);
  });

  it("first button should contain text 'Entrar'", () => {
    cy.get("button").should("contain", "Entrar");
  });

  it("second button should contain text 'Registar'", () => {
    cy.get("button").should("contain", "Registar");
  });
});
