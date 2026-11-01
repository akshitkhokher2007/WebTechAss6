# Assignment 6 — jQuery Portfolio

**Name:** Akshit Khokher  
**Group:** IT-2504

## Run the project

Open `index.html` in a browser with an internet connection. jQuery 3.7.1 loads from the CDN. There is no build step or installation.

## Part 1 — Getting Started with jQuery

### Task 0 — Setup

The HTML loads jQuery from a CDN before `script.js`. The document-ready function prints `jQuery is ready!` in the browser console. Open Developer Tools → Console to see it.

### Task 1 — Selectors and CSS

The page displays my name, introduction and portfolio title. The `h2` tag selector adds a border, `#headline` changes the greeting with `.text()`, and `.intro` changes the font size with `.css()`. The theme buttons add or remove the dark class.

![Tasks 0 and 1 — portfolio](screenshots/task0-1.png)

## Part 2 — jQuery Effects

### Task 2 — Visibility Methods

Hide, Show and Toggle control the status and fun facts using `.hide()`, `.show()` and `.toggle()`.

![Task 2 — About Me](screenshots/task2.png)

### Task 3 — Fade Methods

Two local PNG illustrations show coding and football. The three buttons use `.fadeIn()`, `.fadeOut()` and `.fadeToggle()` on both images.

![Task 3 — Gallery](screenshots/task3.png)

### Task 4 — Slide Methods

Each of the three favorite headings uses `.slideToggle()` for its panel. Open All uses `.slideDown()` and Close All uses `.slideUp()`.

![Task 4 — Favorite panels expanded](screenshots/task4.png)

## Part 3 — DOM Manipulation

### Task 5 — Add and Remove Elements

The initial skills are HTML, CSS, JavaScript and C#. Add Skill appends a new item, Prepend Skill inserts it first, and Remove Skill removes the last item. Whitespace-only inputs are rejected. New skill text is inserted with `.text()`.

![Task 5 — Updated skills list](screenshots/task5.png)

### Task 6 — Modifying Attributes

Change Link switches between my GitHub profile and its repositories tab using `.attr("href", ...)`. The visible link text changes too.

![Task 6 — Changed link](screenshots/task6.png)

### Task 7 — Form Interaction

The input event reads Name and Email with `.val()` and updates the live preview using `.text()`. The form is a local demonstration and does not send data.

![Task 7 — Live preview](screenshots/task7.png)

## Part 4 — Animations

### Task 8 — Basic Animation

Three bars represent HTML, CSS and JavaScript from the skills list. They start at zero width. Animate My Skills uses `.animate()` to reach 80%, 65% and 45%. Clicking again animates all bars back to zero. These percentages are demonstration values.

![Task 8 — Animated skill bars](screenshots/task8.png)

## Work process

The project uses one HTML page, one stylesheet and one jQuery script. The sections follow the assignment task order. Local illustrations keep the gallery independent of external image services. Basic styling keeps the content readable on desktop and mobile. Each interaction was checked before capturing the screenshots.

## Files

- `index.html` — page content and CDN setup
- `style.css` — layout, themes and skill bars
- `script.js` — task functions
- `images/` — two local gallery illustrations
- `screenshots/` — task screenshots for this report

## GitHub and GitHub Pages submission

1. Extract the ZIP.
2. Create a **public** GitHub repository such as `WebTechAss6`.
3. Upload the **contents** of the `assignment6` folder to the repository root. Make sure `index.html` is at the root, alongside this README.
4. Commit the files to `main`.
5. Open repository **Settings → Pages**. Select **Deploy from a branch**, then `main` and `/ (root)`, and save.
6. Wait for deployment and open the published address shown in Settings → Pages.
7. Submit both the public repository URL and the published GitHub Pages URL to Moodle before the deadline.

The ZIP is the local project. It does not create or publish a GitHub repository. Review the personal details and favorite choices before submitting, and practise explaining each jQuery method for the mandatory defense.
