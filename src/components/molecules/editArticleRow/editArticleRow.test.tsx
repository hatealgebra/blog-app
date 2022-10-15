import React from "react";

import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";

import { setupTest } from "../../../utils/testing.utils";

import EditArticleRow from "./EditArticleRow";
import { ArticleRowExample } from "./editArticleRow.stories";

// TODO: JEST spyOn on functions inside the component

describe("Article Row interactivity", () => {
  //   const ediArticleFn = jest.spyOn(ArticleRowExample, "editArticle");
  //   beforeEach(() => setupTest(<ArticleRowExample />));
  //   test("checkbox click", async () => {
  //     const { getByRole } = screen;
  //     userEvent.click(getByRole("checkbox"));
  //     await waitFor(() => {
  //       expect(getByRole("checkbox")).toHaveAttribute("checked", null);
  //     });
  //   });
  //   test("edit action", async () => {
  //     const { getAllByRole } = screen;
  //     userEvent.click(getAllByRole("button")[0]);
  //     await waitFor(() => {
  //       expect(ediArticleFn).toHaveBeenCalled();
  //     });
  //   });
  //   test("delete action", () => {
  //     const { getAllByRole } = screen;
  //     userEvent.click(getAllByRole("button")[1]);
  //     expect(deleteMockFn).toHaveBeenCalled();
  //   });
});
