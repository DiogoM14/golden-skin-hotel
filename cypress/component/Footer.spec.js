/// <reference types="cypress" />
import { mount } from "@cypress/react";
import Footer from "../../src/components/Footer";

describe("About Us Page", () => {
  beforeEach(() => {
    mount(<Footer />);
  });

  it("should render the footer", () => {
    cy.get("footer").should("be.visible");
  });

  it("should render the footer with the correct text", () => {
    cy.get("footer").contains("© 2022 Golden Skin Hotel. All rights reserved");
  });
});
