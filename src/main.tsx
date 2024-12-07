import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EditCrafterEditor } from "./edit-crafter/EditCrafter";
import "./index.css";
import { cn } from "./lib/utils";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EditCrafterEditor
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
