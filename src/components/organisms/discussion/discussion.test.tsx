import React from "react";
import userEvent from "@testing-library/user-event"

import { setupTest } from "../../../utils/testing.utils";
import { PostDiscussion } from "./discussion.stories";

describe("Discussion handling", () => {
    const commentExample = "This is my new comment!";
    test("Create comment", () => {
        const  {getByRole, getByTestId} = setupTest(<PostDiscussion />);
        userEvent.type(getByRole("textbox"), commentExample);
        userEvent.click(getByRole("button", {description: }))
    })
})