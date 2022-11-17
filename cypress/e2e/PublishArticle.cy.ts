// describe("Protected route", () => {
//   it("redirects from create article page", () => {
//     cy.visit("/admin/create-article");
//     cy.contains("Recent articles").should("exist");
//   });
//   it("redirects from edit article page", () => {
//     cy.visit("/admin/edit-article");
//     // cy.contains("Recent articles").should("exist");
//   });
// });

describe("Publish article", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.login();
    cy.visit("/admin/create-article");
  });
  // it("recognizes empty article title", () => {
  //   cy.contains("Publish article").click();
  //   cy.contains("* Title cannot be empty!").should("exist");
  // });
  // it("recognizes empty content", () => {
  //   cy.get('input[id="Article title"]').type("Hello dear world!");
  //   cy.contains("Publish article").click();
  //   cy.contains("* Content cannot be empty!").should("exist");
  // });
  // it("Creates articles", () => {
  //   cy.get('input[id="Article title"]').type("Hello dear world!");
  //   cy.get(".CodeMirror-sizer")
  //     .last()
  //     .type(
  //       "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //     );
  //   cy.contains("Publish article").click();
  //   cy.contains(
  //     "* Image is mandatory. Please, choose and upload the image."
  //   ).should("exist");
  // });
  it("Creates articles", () => {
    cy.get('input[id="Article title"]').type("Hello dear world!");
    cy.get("input[type=file]").selectFile(
      "/Users/pavelvondra/Work/Coding/Portfolio/blog-app/src/images/british-haircat.jpg",
      { force: true }
    );
    cy.get(".CodeMirror-sizer")
      .last()
      .type(
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      );
    cy.contains("Publish article").click();
  });
});
