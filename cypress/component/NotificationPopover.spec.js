/// <reference types="cypress" />
import { mount } from "@cypress/react";
import NotificationPopover from "../../src/components/Notification/NotificationPopover";

describe("NotificationPopover", () => {
  let bookings = [
    {
      room: {
        _id: "61d6db08eb77c9d0e660daa7",
        room_no: 420,
        type: "double",
        no_beds: 2,
        capacity: 4,
        area: 25,
        amenities: {
          wifi: true,
          tv: true,
          crib: true,
          airConditioning: true,
          iron: false,
          smokeAlarm: false,
        },
        price_night: 80,
        images: [
          "https://firebasestorage.googleapis.com/v0/b/golden-skin-hotel.appspot.com/o/images%2Fpexels-photo-164595.jpeg?alt=media&token=88af38ab-8bbd-4bfe-83b8-963ee18fde0e",
          "https://firebasestorage.googleapis.com/v0/b/golden-skin-hotel.appspot.com/o/images%2Fpexels-photo-189333.jpeg?alt=media&token=56bf813a-2ac8-4641-8796-15733c99180f",
          "https://firebasestorage.googleapis.com/v0/b/golden-skin-hotel.appspot.com/o/images%2Fpexels-photo-271619.jpeg?alt=media&token=4a029cb1-03fe-4a0f-8f33-12dd29615b03",
          "https://firebasestorage.googleapis.com/v0/b/golden-skin-hotel.appspot.com/o/images%2Fpexels-photo-279746.jpeg?alt=media&token=6c2b0204-67a8-4027-88df-d249c9a392ba",
          "https://firebasestorage.googleapis.com/v0/b/golden-skin-hotel.appspot.com/o/images%2Fpexels-photo-2507016.jpeg?alt=media&token=fc1ba9d5-8aed-4250-998c-755f0f360070",
        ],
        reserved: [
          {
            from: new Date("2022-01-11T00:00:00.000Z"),
            to: new Date("2022-01-29T00:00:00.000Z"),
            _id: "61de0a599b17d2efaef02229",
          },
        ],
        __v: 1,
      },
      no_guests: 4,
      extras: [
        "Serviço de quarto",
        "Acesso ao jacuzzi",
        "Acesso ao ginásio",
        "Bar aberto",
        "Refeições incluídas",
      ],
      observations: "quero dormir",
      dates: {
        from: new Date("2022-01-11T00:00:00.000Z"),

        to: new Date("2022-01-29T00:00:00.000Z"),
      },
      no_nights: 18,
      final_price: 1515,
      _id: "61de0a599b17d2efaef02228",
    },
  ];

  beforeEach(() => {
    mount(<NotificationPopover bookings={bookings} />);
  });

  it("should render", () => {
    cy.get("[data-cy='notification-button']").should("be.visible");
  });

  it("should render the popover after click the button", () => {
    cy.get("[data-cy='notification-button']").click();
    cy.get("[data-cy='notification-popover']").should("be.visible");
  });

  it("should close the popover after opening it", () => {
    cy.get("[data-cy='notification-button']").click();
    cy.get("[data-cy='notification-popover']").should("be.visible");

    cy.get(".chakra-popover__close-btn").click();
    cy.get(".chakra-popover__close-btn").should("not.be.visible");
  });

  it("should render the popover with the correct number of bookings", () => {
    cy.get("[data-cy='notification-button']").click();
    cy.get("[data-cy='notification-popover']").should("be.visible");

    cy.get("[data-cy='notification-popover-bookings']").should(
      "have.length",
      1
    );
  });
});
