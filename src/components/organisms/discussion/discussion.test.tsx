import React from "react";
import userEvent from "@testing-library/user-event";

import { setupTest } from "../../../utils/testing.utils";
import { DiscussionExample } from "./discussion.stories";
import { waitFor } from "@testing-library/dom";
import { USER_CONFIG } from "../../../services/services.config";

// TODO: Write tests
describe("Discussion handling", () => {
  const commentExample = "This is my new comment!";
  test("Create comment", async () => {
    const { getByRole, getByText, findByRole } = setupTest(
      <DiscussionExample />
    );
    userEvent.type(getByRole("textbox"), commentExample);
    userEvent.click(await findByRole("button", { name: "Send comment" }));
    await waitFor(() => {
      screen.debug();
      expect(getByText(commentExample)).toBeInTheDocument();
      expect(getByText(USER_CONFIG.NAME)).toBeInTheDocument();
    });
  });
});
