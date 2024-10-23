'use client';
import React from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

const theme = {
  // Theme styling goes here
  //...
};
export default function page() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError:console.error,
  };

//   function onError(error) {
//     console.error(error);
//   }
  return (
    <div className="container mr-8">
        <div className="h-3"></div>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </LexicalComposer>
    </div>
  );
}
