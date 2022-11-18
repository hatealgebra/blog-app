describe("Protected route my articles", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/admin/my-articles");
  });
  it("redirect to homepage", () => {
    cy.visit("/admin/my-articles");
    cy.get("h1").should("have.text", "Recent articles");
  });
  it("stay on the the my article page", () => {
    cy.login();
    cy.visit("/admin/my-articles");
    cy.get("h1").should("have.text", "My Articles");
  });
});

describe("My articles", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.login();
    cy.visit("/admin/my-articles");
  });
  it("logs out and redirects to the homepage", () => {
    cy.get(".avatar").click();
    cy.contains("Log Out").click();
    cy.get("h1").should("have.text", "Recent articles");
    cy.get("a[href='/login']").should("exist");
  });
  it("edit article", () => {
    cy.get(".edit-article__button-edit").last().click();
    cy.url().should("contain", "/admin/edit-article");
    cy.contains("Why Do Cats Have Whiskers?");
  });
  it("deletes article", () => {
    cy.get(".edit-article__button-delete").first().click();
    cy.contains("Wet vs. Dry Cat Food: Which is Better").should("not.exist");
    cy.get(".edit-article__button-delete").its("length").should("equal", 4);
  });
  it("does not show articles", () => {
    cy.get(".edit-article__button-delete").first().click();
    cy.get(".edit-article__button-delete").last().click();
    cy.get(".edit-article__button-delete").first().click();
    cy.get(".edit-article__button-delete").last().click();
    cy.get(".edit-article__button-delete").first().click();
    cy.contains("No articles written yet, you should cook some!");
  });
});
