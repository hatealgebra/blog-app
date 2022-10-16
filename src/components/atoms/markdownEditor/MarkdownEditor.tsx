import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  return (
    <SimpleMDE
      value={value}
      onChange={onChange}
      placeholder="Supports markdown. Yay!"
    />
  );
};

interface MarkdownEditorProps {
  value: string;
  onChange: React.Dispatch<string>;
}

export default MarkdownEditor;
