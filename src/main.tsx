import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { cn } from "./lib/utils";
import { SwiftFlowEditor } from "./swift-flow/SwiftFlow";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SwiftFlowEditor
      value={"hi this is editor"}
      throttleDelay={0}
      className={cn("w-full", {
        "border-destructive focus-within:border-destructive":
          "form.formState.errors.description,",
      })}
      editorContentClassName="some-class"
      output="html"
      placeholder="Type your description here..."
      // onCreate={handleCreate}
      autofocus={true}
      immediatelyRender={true}
      editable={true}
      injectCSS={true}
      editorClassName="focus:outline-none p-5"
      onFileUpload={async () => {
        console.log("file upload");
        return "/vite.svg";
      }}
    />
  </StrictMode>
);
