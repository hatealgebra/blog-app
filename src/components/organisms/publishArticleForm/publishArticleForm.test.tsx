import React from "react";
import { setupTest } from "../../../utils/testing.utils";
import CreateNewArticleForm from "./PublishArticleForm";

describe("Create new article suite", () => {
  let form;
  let titleInput;
  let imageFileInput;

  beforeEach(() => {
    const { getByRole } = setupTest(<CreateNewArticleForm />);
    let form = getByRole("form");
  });
  test("Click will submit the form", () => {});
});
