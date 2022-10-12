import React from "react";
import { setupTest } from "../../../utils/testing.utils";
import { MobileNavBar } from "./topnavBar.stories";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("interactivity of top navbar", () => {
  test("open mobile menu", async () => {
    const { getAllByRole, getByTestId } = setupTest(<MobileNavBar />);
    userEvent.click(getAllByRole("button")[0]);
    await waitFor(() =>
      expect(getByTestId("mobileMenu")).toHaveStyle("height: 100%")
    );
  });
});
