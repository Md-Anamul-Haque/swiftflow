# SwiftFlow

**SwiftFlow** is a powerful, customizable, and user-friendly React component for building rich text editors. Designed with modern web development in mind, it provides developers with an intuitive, extensible, and performant solution for adding text editing functionality to their React applications.

## Features

- **Customizable Toolbar**: Easily configurable toolbar sections with options for headings, lists, formatting, and more.
- **Image and File Upload**: Built-in image and file handling with upload support, validation, and error handling.
- **Placeholder Support**: Customizable placeholder text for a better user experience.
- **Multiple Content Outputs**: Supports various content output formats such as `HTML`, `JSON`, and `Text`.
- **Real-time Updates**: Callbacks to capture content changes in real-time.
- **Accessibility & Responsiveness**: Designed to work well across devices and screen sizes.

## Installation

To install **SwiftFlow** in your React project, run the following command:

```bash
npm install swiftflow
```

or

```bash
yarn add swiftflow
```

## Usage

Here's a basic example of how to integrate **SwiftFlow** into your React application:

```typescript
import React, { useState } from "react";
import { SwiftFlowEditor } from "swiftflow";

const App: React.FC = () => {
  const [editorContent, setEditorContent] = useState("");

  return (
    <div className="App">
      <SwiftFlowEditor
        value={editorContent}
        onChange={setEditorContent}
        placeholder="Start typing..."
        onFileUpload={async (file) => {
          // Simulate an upload process and return a file URL
          const fileUrl = "https://example.com/path/to/uploaded/file";
          return fileUrl;
        }}
      />
    </div>
  );
};

export default App;
```

## Props Overview

### `SwiftFlowEditor`

- **`value`** (`Content`): Initial content of the editor.
- **`onChange`** (`(value: Content) => void`): Callback to handle content updates.
- **`className`** (`string`): Custom CSS class for the editor container.
- **`editorContentClassName`** (`string`): Custom CSS class for the content area.
- **`placeholder`** (`string`): Placeholder text for the editor.
- **`onFileUpload`** (`(file: File) => Promise<string>`): Function for handling file uploads. Must return a URL of the uploaded file.

### `useSwiftFlowEditor`

- **`value`** (`Content`): Initial content for the editor.
- **`output`** (`'html' | 'json' | 'text'`): The output format of the editor content. Defaults to `'html'`.
- **`placeholder`** (`string`): The placeholder text displayed in the editor.
- **`editorClassName`** (`string`): Custom class for the editor.
- **`throttleDelay`** (`number`): Delay for throttling content updates in milliseconds. Defaults to `0`.
- **`onUpdate`** (`(content: Content) => void`): Callback called when the content changes.
- **`onBlur`** (`(content: Content) => void`): Callback called when the editor loses focus.
- **`onFileUpload`** (`(file: File) => Promise<string>`): Function to handle file uploads.

## Customizing the Editor

**SwiftFlow** is built with a highly modular architecture that allows customization of its features. You can adjust the toolbar, modify the extension configurations, and add or remove features as needed.

### Extending with Custom Extensions

If you want to add more custom features, you can extend the `createExtensions` function in `useSwiftFlowEditor` to include your custom extensions.

## Development & Contribution

To contribute to **SwiftFlow**, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/md-anamul-haque/swiftflow.git
   cd swiftflow
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Create a feature branch and make your changes:

   ```bash
   git checkout -b feature/your-feature
   ```

5. Push your changes and create a pull request.

## License

**SwiftFlow** is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

**SwiftFlow** is built with [TipTap](https://tiptap.dev/) and leverages its robust extensibility and API to provide a seamless and powerful editing experience.

---

For more detailed documentation, please refer to the [full documentation](./docs/README.md) (if available) or visit the [GitHub repository](https://github.com/md-anamul-haque/swiftflow).
