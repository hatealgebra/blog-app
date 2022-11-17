describe("login page", () => {
  it("url check on load", () => {
    cy.visit("/login");
  });
});

describe("Login form", () => {
  it("is missing email input", () => {
    cy.visit("/login");
    cy.get("button").click();
    cy.contains(
      "Email should be in this format: email@example.com. Please check it."
    );
  });
  it("is missing password input", () => {
    cy.visit("/login");
    cy.get("#Email").type("contact@pavel-vondra.com");
    cy.get("button").click();
    cy.contains("Password field is empty. Please check it");
  });
  it("incorrect login", () => {
    cy.visit("/login");
    cy.get("#Email").type("contact@pavel-vondra.com");
    cy.get("#Password").type("MockPwd");
    cy.get("button").click();
    cy.contains("Password field is empty. Please check it");
  });
  it("correct login", () => {
    cy.visit("/login");
    cy.get("#Email").type("contact@pavel-vondra.com");
    cy.get("#Password").type("MockPwd12345");
    cy.get("button").click();
    cy.url().should("include", "/admin/my-articles");
    cy.get("a[href='/login']").should("not.exist");
  });
});
