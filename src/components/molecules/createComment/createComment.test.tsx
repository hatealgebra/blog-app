import React from "react";

import { setupTest, setupTestWithStore } from "../../../utils/testing.utils";
import CreateComment, { FormValidation } from "./CreateComment";
import userEvent from "@testing-library/user-event";
import { getByText, screen, waitFor } from "@testing-library/react";

const articleId = "jdiwoj1oij418jf189h4891";
const mockFn = jest.fn();
describe("Create comment when not logged in", () => {
  let textbox: HTMLElement, button: HTMLElement;

  beforeEach(() => {
    const { getByRole } = setupTestWithStore(
      <CreateComment articleId={articleId} setComments={mockFn} />
    );
    textbox = getByRole("textbox");
    button = getByRole("button");
    userEvent.click(textbox);
  });

  test("button does not appear", async () => {
    screen.debug();
    await waitFor(() => {
      expect(button).not.toBeInTheDocument();
    });
  });
  test("Don't submit without any comment", async () => {
    const { getByRole } = setupTestWithStore(
      <CreateComment articleId={articleId} setComments={mockFn} />
    );
    userEvent.click(getByRole("textbox"));
    await waitFor(() => {
      userEvent.click(getByRole("button"));
    });
    expect(mockFn).not.toHaveBeenCalled();
  });
});

// describe("Create comment handling", () => {
//   test("Comment is too short", async () => {
//     const commentTooShort = "Short comment!";
//     const { getByRole, getByText } = setupTestWithStore(
//       <CreateComment articleId={articleId} setComments={mockFn} />
//     );
//     await userEvent.type(getByRole("textbox"), commentTooShort);
//     await waitFor(() => {
//       userEvent.click(getByRole("button"));
//       expect(getByText(FormValidation.EMPTY)).toBeInTheDocument();
//     });
//   });
//   test("Comment is too long", async () => {
//     const tooLongComment =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim minima velit molestiae voluptates deserunt aut perferendis aliquid? Ab sequi nesciunt possimus reprehenderit dolorum rerum assumenda consequuntur repellat quod aliquid! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos fugit, enim nulla commodi adipisci, beatae officia repudiandae esse ab obcaecati fugiat laborum deserunt numquam praesentium ex rerum sequi expedita unde.";
//     const { getByRole, getByText } = setupTestWithStore(
//       <CreateComment articleId={articleId} setComments={mockFn} />
//     );
//     await userEvent.type(getByRole("textbox"), tooLongComment);
//     await waitFor(() => {
//       userEvent.click(getByRole("button"));
//       expect(getByText(FormValidation.TOO_LONG)).toBeInTheDocument();
//     });
//     expect(mockFn).not.toHaveBeenCalled();
//   });
//   test("Comment passes", async () => {
//     const commentTextPass = "This is a new comment! It will be create!";

//     const { getByRole } = setupTestWithStore(
//       <CreateComment setComments={mockFn} />
//     );
//     await userEvent.type(getByRole("textbox"), commentTextPass);
//     userEvent.click(getByRole("button"));
//     await waitFor(() => {
//       expect(mockFn).toHaveBeenCalled();
//     });
//   });
// });
