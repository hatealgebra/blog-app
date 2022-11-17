describe("Homepage ", () => {
  it("loads page", () => {
    cy.visit("/");
  });
  it("Shows correct heading", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Recent articles");
  });
  it("shows correct article", () => {
    cy.visit("/");
    cy.get("h3").should(
      "have.text",
      "Wet vs. Dry Cat Food: Which is Better?How Much Wet Food Should I Feed My Cat?Do Cats Drink Water? Cat Hydration & Dehydration PreventionWhat Is the Difference Between Natural and Organic Cat Food?Why Do Cats Have Whiskers?"
    );
  });
  it("get five articles", () => {
    cy.visit("/");
    cy.get(".article-preview").should("have.length", 5);
  });
});

describe("Homepage link", () => {
  it("redirects to recent articles", () => {
    cy.visit("/");
    cy.get("a[href='/']").click();
    cy.visit("/");
  });
  it("redirects to about articles", () => {
    cy.visit("/");
    cy.get("a[href='/about']").click();
    cy.url().should("include", "/about");
  });
  it("redirects to login", () => {
    cy.visit("/");
    cy.get("a[href='/login']").click();
    cy.url().should("include", "/login");
  });
});
