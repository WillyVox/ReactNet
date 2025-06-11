// .prettierrc.js
module.exports = {
  // Print width
  printWidth: 100, // Recommend 100 or 120 for better readability on wider screens

  // Tab width
  tabWidth: 2, // Use 2 spaces for indentation

  // Use tabs instead of spaces
  useTabs: false,

  // Semicolons at the end of statements
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Print trailing commas wherever valid in ES5 (objects, arrays, etc.)
  trailingComma: 'es5',

  // Print spaces between brackets in object literals
  bracketSpacing: true,

  // Put the > of a multi-line JSX element at the end of the last line
  jsxBracketSameLine: false, // Deprecated, use bracketSameLine for Prettier v2.x and above
  bracketSameLine: false, // For Prettier v2.x+

  // Add parentheses around a sole arrow function parameter
  arrowParens: 'always',

  // Use default (auto) for end of line
  endOfLine: 'lf', // Ensure consistent line endings (LF for Unix/Linux/macOS)

  // Explicitly set parser if needed, usually inferred
  // parser: 'typescript',

  // For HTML, Vue, or JSX, handle whitespace sensitive formatting.
  // Set to 'css' or 'strict' if you encounter issues with specific frameworks.
  htmlWhitespaceSensitivity: 'css',
};
