export const cutTextWithElipsis = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  } else {
    return text.split("", limit).concat("...").join("");
  }
};
