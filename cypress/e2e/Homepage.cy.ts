describe("Homepage ", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads page", () => {
    cy.url().should("equal", "http://localhost:8000/");
  });
  it("Shows correct heading", () => {
    cy.get("h1").should("have.text", "Recent articles");
  });
  it("shows correct article", () => {
    cy.get("h3").should(
      "have.text",
      "Wet vs. Dry Cat Food: Which is Better?How Much Wet Food Should I Feed My Cat?Do Cats Drink Water? Cat Hydration & Dehydration PreventionWhat Is the Difference Between Natural and Organic Cat Food?Why Do Cats Have Whiskers?"
    );
  });
  it("get five articles", () => {
    cy.get(".article-preview").should("have.length", 5);
  });
});

describe("Homepage link", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("redirects to about articles", () => {
    cy.get("a[href='/about']").click();
    cy.url().should("include", "/about");
  });
  it("redirects to login", () => {
    cy.get("a[href='/login']").click();
    cy.url().should("include", "/login");
  });
});

describe("Articles link", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("redirects to article and shows content", () => {
    cy.contains("Read whole article").first().click();
    cy.url().should("contain", "641421a4-1044-4649-bd56-8320516edda0");
    cy.get("h1")
      .should("have.text", "Wet vs. Dry Cat Food: Which is Better?")
      .should("be.visible");
    cy.get(".read-article__author").should("have.text", "Pavel Vondra");
    cy.get(".read-article__date").should("have.text", "5. 11. 2021");
  });
});
