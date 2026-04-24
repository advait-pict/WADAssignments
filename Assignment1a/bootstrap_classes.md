# Bootstrap Classes Used in Pune Tourist Guide Project

Below are the Bootstrap classes found across the four HTML pages, with a short explanation of each class's use in the project.

## 1. Navbar Classes
- `navbar`: Base navbar component. Used to create the top navigation bar.
- `navbar-expand-lg`: Makes the navbar expand (horizontal) on large screens and collapse on smaller screens.
- `navbar-dark`: Applies dark color scheme to navbar text and toggler icons.
- `bg-dark`: Gives the navbar a dark background color.
- `opacity-24`: (custom/utility-like in HTML) Used to adjust navbar opacity in `index.html` (note: not a default Bootstrap utility class in BS5 — treated as a custom utility in the project).
- `navbar-brand`: Styles the brand/logo link in the navbar.
- `navbar-toggler`: Button that toggles the collapsed navbar menu on small screens.
- `collapse`: Utility used to hide/show collapsible content (wraps the nav links).
- `navbar-collapse`: Container for collapsible navbar content.
- `navbar-nav`: Wraps the navigation links list.
- `nav-item`: Applied to each list item in the nav.
- `nav-link`: Styles each navigation link.

## 2. Header & Typography Classes
- `text-white`: Sets text color to white; used on the hero/header overlay.
- `text-center`: Centers text horizontally.
- `d-flex`: Enables flexbox layout for alignment of header content.
- `align-items-center`: Vertically centers flex children.
- `justify-content-center`: Horizontally centers flex children.
- `display-4`: Large display heading style for the main title.
- `fw-bold`: Makes text bold (used for headings).
- `lead`: Styles a lead paragraph to stand out (used for subtitle/intro text).

## 3. Card & Content Classes
- `card`: Card component used to group related content (e.g., Heritage, Heritage cards on `index.html`).
- `card-body`: Container for card content and spacing.
- `card-title`: Styles the title inside a card.
- `card-text`: Styles the body text inside a card.

## 4. Layout & Grid Classes
- `container`: Centers and pads page content horizontally.
- `row`: Row in Bootstrap grid to hold columns.
- `col-md-4`: Column that takes 4/12 width on medium+ screens; used to create 3-column layouts for cards.

## 5. Spacing & Section Utilities
- `my-5`: Adds vertical margin on top and bottom (used to space sections).

## 6. Other Utility Classes
- `ms-auto`: Adds left margin auto to push nav to the right (used for right-aligned nav links).
- `text-shadow`: (custom in CSS) Not a Bootstrap utility; project uses text shadow in custom CSS for headings in `contact.html`.
- `opacity`: Generic term; project uses `opacity-24` as noted above (custom intent to set opacity).

## 7. Custom Classes (project-defined)
These are not Bootstrap classes but appear in the project CSS/HTML.
- `contact-header`: Custom header styling for `contact.html`.
- `contact-container`: Wrapper used to constrain contact page width and padding.
- `contact-content`: Grid layout used on the contact page for form and info.
- `food-card`: Custom card style for food items in `food.html` (background image, hover effects).
- `place-card`: Custom card style for place items in `places.html` (background image, hover effects).

## Summary
This document lists all Bootstrap classes used across the four HTML pages and explains what each class does in the context of this project. Custom classes from the project's CSS are grouped separately and include brief descriptions.

If you'd like, I can also:
- Export this document to a Word `.docx` file.
- Create a printable PDF.
- Generate a table with file-by-file usage (which classes appear in which HTML file).

Tell me which of the above you'd like next.