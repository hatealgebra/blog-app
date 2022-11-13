import React from "react";

import userEvent from "@testing-library/user-event";
import { setupTestWithStore } from "../../../utils/testing.utils";
import { waitFor } from "@testing-library/dom";
import LoginStatus from "./LoginStatus";

describe("Check the menu functionality", () => {
  let avatarButton: HTMLElement, menu: HTMLElement;
  beforeEach(() => {
    const { getByRole } = setupTestWithStore(<LoginStatus isLogged={true} />);
    avatarButton = getByRole("button", { description: "avatar-button" });
    menu = getByRole("menu");
    userEvent.click(avatarButton);
  });
  test("Shows logged in user", async () => {
    await waitFor(() => expect(menu).toBeVisible());
  });
  test("When button clicked again, menu is close", async () => {
    userEvent.click(avatarButton);
    await waitFor(() => expect(menu).not.toBeVisible());
  });
});
