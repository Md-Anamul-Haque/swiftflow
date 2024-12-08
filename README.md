To use **EditCrafter** with Tailwind CSS, you need to set up Tailwind CSS in your project. Here's a step-by-step guide to help you integrate Tailwind CSS and customize your `tailwind.config.js` file for use with **EditCrafter**.

## Step 1: Install Tailwind CSS

If you haven't installed Tailwind CSS in your project yet, run the following commands to add it:

```bash
npm install -D tailwindcss postcss autoprefixer
```

or with yarn:

```bash
yarn add -D tailwindcss postcss autoprefixer
```

Then, create the `tailwind.config.js` file by running:

```bash
npx tailwindcss init
```

## Step 2: Configure `tailwind.config.js`

Open the `tailwind.config.js` file and customize it as needed for your project. Here's a basic configuration to get started with **EditCrafter**:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/editcrafter/**/*.{js,ts,jsx,tsx}", // Add this line to include EditCrafter components
  ],
  theme: {
    extend: {
      // Add custom theme configurations if needed
    },
  },
  plugins: [],
};
```

- The `content` array includes paths to all your source files and any external components, such as those from the **EditCrafter** package, to ensure Tailwind CSS can purge unused styles for a smaller output file.

## Step 3: Add Tailwind Directives to Your CSS

Create or open your main CSS file (e.g., `./src/styles/index.css`) and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This will import Tailwind CSS styles into your project.

## Step 4: Import Your CSS File

Ensure that your CSS file is imported at the top of your `index.tsx` or `App.tsx`:

```typescript
import "./styles/index.css";
```

## Final Note: Customization for **EditCrafter**

- You can customize the theme in your `tailwind.config.js` by extending `theme` as needed for your specific use case.
- **EditCrafter** already comes with built-in styles, but you can add your own custom Tailwind classes to further style the editor's components.

## Full Example of a `tailwind.config.js` File

Here's an example `tailwind.config.js` file that you can use as a template:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/editcrafter/**/*.{js,ts,jsx,tsx}", // Ensure EditCrafter components are included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#657786",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

> also you can use CrafterPreview component to view preview

## Using **EditCrafter** with Tailwind

Once you've completed the above steps, you can use **EditCrafter** in your project and style its components using Tailwind CSS classes as needed.

## Repository Information

You can find the **EditCrafter** package and its development updates on [GitHub](https://github.com/Md-Anamul-Haque/editcrafter.git). For any issues or contributions, feel free to open an issue or submit a pull request.
