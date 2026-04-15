# HNG Todo Card

A simple static todo card demo built with HTML, Tailwind CSS, and JavaScript.

## Overview

This repository contains a single-page todo card UI component featuring a task preview card with interactive controls.

## Files

- `index.html` - markup for the todo card, layout, and UI structure
- `script.js` - client-side behavior for toggle, status updates, expand/collapse, edit form, and delete dialog

## Features

- task completion toggle with live UI updates
- status selector for `Pending`, `In Progress`, and `Done`
- expanding/collapsing description text
- edit form with title, description, priority, and due date inputs
- delete action opens a small inline dialog panel above the card
- due date countdown with overdue indicator
- priority badge and colored status visuals
- responsive card styling using Tailwind CSS CDN

## Usage

1. Open `index.html` in a browser.
2. Use the checkbox to mark the task complete or pending.
3. Change status using the dropdown.
4. Click `Show more` to expand the description.
5. Click `Edit` to open the edit form and update the task details.
6. Click `Delete` to show a small inline delete dialog above the card.

## Notes

- This is a front-end demo and does not persist data.
- The delete action is presented through an inline confirmation panel rather than a browser alert.
- Tailwind CSS is loaded from CDN in `index.html`.

## License

This repo is provided as a simple demo project.
