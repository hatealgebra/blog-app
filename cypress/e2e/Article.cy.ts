describe("User reading article", () => {
  it("unauthorized user", () => {
    cy.visit("/");
    cy.contains("Read whole article").click();
    cy.contains("Wet vs. Dry Cat Food: Which is Better?");
    cy.get("textarea").should("be.disabled");
  });
  it("authorized user", () => {
    cy.get("a[href='/login']").click();
    cy.url().should("contain", "/login");
    cy.visit("/login");
    cy.get("#Email").type("contact@pavel-vondra.com");
    cy.get("#Password").type("MockPwd12345");
    cy.get("button").click();
    cy.url().should("include", "/admin/my-articles");
    cy.contains("Recent Articles").click();
    cy.contains("Read whole article").click();
    cy.get("textarea").click();
  });
});
