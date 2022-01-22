/// <reference types="cypress" />
import { mount } from "@cypress/react";
import LoginPanel from "../../src/components/AuthPage/LoginPanel";

describe("LoginPanel", () => {
  beforeEach(() => {
    mount(<LoginPanel />);
  });

  it("should render the login form", () => {
    cy.get("[data-cy='login-form']").should("be.visible");
  });

  it("should render the forgot password modal on click", () => {
    cy.get("[data-cy='forgot-pw-modal']").should("not.exist");

    cy.get("[data-cy='forgot-pw-modal-btn']").click();

    cy.get("[data-cy='forgot-pw-modal']").should("exist");
  });

  it("should close the forgot password modal", () => {
    cy.get("[data-cy='forgot-pw-modal']").should("not.exist");

    cy.get("[data-cy='forgot-pw-modal-btn']").click();

    cy.get("[data-cy='forgot-pw-modal']").should("exist");

    cy.get("[data-cy='forgot-pw-modal-close-btn']").click();

    cy.get("[data-cy='forgot-pw-modal']").should("not.exist");
  });
});
