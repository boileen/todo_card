# HNG Todo Card

A simple static todo card demo built with HTML, Tailwind CSS, and JavaScript.

## Overview

This repository contains a single-page todo card UI component illustrating:

- task title
- description
- due date
- priority badge
- status indicator
- tag chips
- edit and delete action buttons
- completion toggle with visual state change

## Files

- `index.html` - markup for the todo card component and page structure
- `script.js` - JavaScript that toggles task completion, updates status, and styles the title

## Features

- toggle the task as complete using the checkbox
- completed state updates:
  - title text becomes strikethrough
  - title opacity decreases
  - status label changes between `Pending` and `Done`
  - checkmark becomes visible
- responsive card layout using Tailwind CSS from CDN

## Usage

1. Open `index.html` in a browser.
2. Click the checkbox next to the task to mark it complete or pending.
3. Use the `Edit` and `Delete` buttons as UI placeholders.

## Notes

- The app is purely front-end and does not persist data.
- `Edit` and `Delete` buttons currently only log simple actions or show an alert.
- Tailwind CSS is loaded from CDN in `index.html`.

## License

This repo is provided as a simple demo project.
