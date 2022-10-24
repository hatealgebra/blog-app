import { EPublishArticleErrors } from "../components/organisms/publishArticleForm/PublishArticleForm";
import { checkCreateArticleFormInput } from "./createArticleSubmit.helper";

describe("Check create article form inputs", () => {
  const inputValue = "Input value";
  const markdownShortValue = "Input value";
  const markdownPassValue =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum id dolor ad, incidunt odio, a fugiat totam nemo officia nobis excepturi similique! Vel blanditiis explicabo unde placeat veniam non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum id dolor ad, incidunt odio, a fugiat totam nemo officia nobis excepturi similique! Vel blanditiis explicabo unde placeat veniam non!";
  const mockFile = new File(["goodbye"], "goodbye.png", {
    type: "image/png",
  });
  const mockDispatchError = jest.fn();

  test("Everything is empty", () => {
    expect(checkCreateArticleFormInput("", "", null, mockDispatchError)).toBe(
      false
    );
  });
  test("Everything is empty error value", () => {
    checkCreateArticleFormInput("", "", null, mockDispatchError);
    expect(mockDispatchError).toBeCalledWith(EPublishArticleErrors.TITLE_EMPTY);
  });
  test("Markdown is empty", () => {
    expect(
      checkCreateArticleFormInput(inputValue, "", null, mockDispatchError)
    ).toBe(false);
  });
  test("Markdown is empty error value", () => {
    checkCreateArticleFormInput(inputValue, "", null, mockDispatchError);
    expect(mockDispatchError).toBeCalledWith(
      EPublishArticleErrors.MARKDOWN_EMPY
    );
  });
  test("Markdown is too short", () => {
    expect(
      checkCreateArticleFormInput(
        inputValue,
        markdownShortValue,
        null,
        mockDispatchError
      )
    ).toBe(false);
  });
  test("Markdown is too short error value", () => {
    checkCreateArticleFormInput(
      inputValue,
      markdownShortValue,
      null,
      mockDispatchError
    );
    expect(mockDispatchError).toBeCalledWith(
      EPublishArticleErrors.MARKDOWN_TOO_SHORT
    );
  });
  test("Uploaded file is empty", () => {
    expect(
      checkCreateArticleFormInput(
        inputValue,
        markdownPassValue,
        null,
        mockDispatchError
      )
    ).toBe(false);
  });
  test("Uploaded file is empty error value", () => {
    checkCreateArticleFormInput(
      inputValue,
      markdownPassValue,
      null,
      mockDispatchError
    );
    expect(mockDispatchError).toBeCalledWith(EPublishArticleErrors.IMAGE_EMPTY);
  });
  test("Everything is filled correctly", () => {
    expect(
      checkCreateArticleFormInput(
        inputValue,
        markdownPassValue,
        mockFile,
        mockDispatchError
      )
    ).toBe(true);
  });
  test("Everything is filled correctly error value", () => {
    checkCreateArticleFormInput(
      inputValue,
      markdownPassValue,
      mockFile,
      mockDispatchError
    );
    expect(mockDispatchError).toBeCalledWith(EPublishArticleErrors.PASSED);
  });
});
