// src/courseData.js
import React from "react";

export const COURSE_STRUCTURE = [
  {
    title: "Structure and Basic Styles",
    lessons: [
      { id: "introduction", name: "CSS Syntax" },
      { id: "basic_style", name: "Basic Style Application" },
    ],
  },
  {
    title: "Inline, Internal, External CSS and Selectors",
    lessons: [
      { id: "css_inclusion", name: "CSS Inclusion Methods" },
      { id: "css_selectors", name: "CSS Selectors" },
    ],
  },
  {
    title: "Basic Styles",
    lessons: [
      { id: "text-formatting", name: "Text Formatting" },
      { id: "color-properties", name: "Color Properties" },
      { id: "box-model-basics", name: "Box Model Basics" },
    ],
  },
  {
    title: "Box Model, Height and Width",
    lessons: [
      { id: "box-model-details", name: "Box Model Details" },
      { id: "element-dimensions", name: "Element Dimensions" },
      { id: "box-sizing", name: "Box Sizing" },
    ],
  },
  {
    title: "Display and Position",
    lessons: [
      { id: "display-properties", name: "Display Properties" },
      { id: "positioning-elements", name: "Positioning Elements" },
      { id: "z-index", name: "Z-index" },
    ],
  },
  {
    title: "Flexbox and Grid Layout",
    lessons: [
      { id: "flexbox-intro", name: "Flexbox Introduction" },
      { id: "grid-intro", name: "CSS Grid Introduction" },
      { id: "flex-vs-grid", name: "Flex vs. Grid" },
    ],
  },
  {
    title: "Transforms and Animations",
    lessons: [
      { id: "css-transforms", name: "CSS Transforms" },
      { id: "css-transitions", name: "CSS Transitions" },
      { id: "css-animations", name: "CSS Animations" },
    ],
  },
  {
    title: "Media Queries",
    lessons: [
      { id: "responsive-design", name: "Responsive Design Intro" },
      { id: "media-query-usage", name: "Media Query Usage" },
      { id: "device-specific-styles", name: "Device-Specific Styles" },
    ],
  },
  {
    title: "Navigation",
    lessons: [
      { id: "tasks", name: "Tasks", isSpecial: true },
      { id: "knowledge-check", name: "Check Your Knowledge", isSpecial: true },
    ],
  },
];

// ---------------- LESSON DATA ----------------
export const LESSON_DATA = {
  introduction: {
    title: "Structure and Basic Styles",
    subtitle: "CSS Syntax",
    content: (
      <>
        <p>
          CSS (Cascading Style Sheets) is used to style and visually format HTML
          elements. It controls how content appears — colors, fonts, spacing,
          layout, and much more.
        </p>
        <h3>CSS Syntax Structure:</h3>
        <div className="syntax">
          selector &#123;
          <br />
          &nbsp;&nbsp;property: value;
          <br />
          &#125;
        </div>
        <ul>
          <li><code>h1</code> — selector targets all &lt;h1&gt; elements.</li>
          <li><code>color: blue;</code> — sets the text color.</li>
          <li><code>font-size: 24px;</code> — sets font size.</li>
        </ul>
      </>
    ),
    code: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: blue;
  font-size: 24px;
}
</style>
</head>
<body>
<h1>CSS Syntax Example</h1>
</body>
</html>`,
  },

  basic_style: {
    title: "Structure and Basic Styles",
    subtitle: "Basic Style Application",
    content: (
      <>
        <p>
          CSS can apply visual styles to HTML elements such as fonts, colors,
          spacing, and borders. There are 3 ways to add CSS:
        </p>
        <ul>
          <li>Inline — inside an element’s style attribute</li>
          <li>Internal — within a &lt;style&gt; tag</li>
          <li>External — in a separate CSS file</li>
        </ul>
      </>
    ),
    code: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: green;
  background-color: #f0f0f0;
  padding: 10px;
  font-family: Arial;
}
</style>
</head>
<body>
<p>This paragraph is styled using basic CSS properties.</p>
</body>
</html>`,
  },

  tasks: {
    title: "CSS Tasks",
    content: (
      <div className="tasks-container">
        <a href="../pdf/csstask1.pdf" target="_blank" rel="noreferrer">
          <div className="task-item">Task 1</div>
        </a>
        <a href="../pdf/csstask2.pdf" target="_blank" rel="noreferrer">
          <div className="task-item">Task 2</div>
        </a>
        <a href="../pdf/csstask3.pdf" target="_blank" rel="noreferrer">
          <div className="task-item">Task 3</div>
        </a>
      </div>
    ),
  },
};
