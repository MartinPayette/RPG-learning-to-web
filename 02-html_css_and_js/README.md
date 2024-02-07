# Act 2 - HTML, CSS and JavaScript

`npm run act2`

Implement the interactivity between the increment/decrement button and the stat value

1. The increment button should increment the stat value by 1
2. The increment button should be limited to MAX (below example is max limited to 10)
3. The decrement button should decrement the state value by 1
4. The decrement button should be limited to MIN (below example is min limited to 0)
5. When the increment/decrement button has reached it's limit it should become disabled
6. When the stat value is no longer at a limit it should re-enable the increment/decrement button

Video
[![image](./.files/Screenshot%202024-02-06%20at%2011.53.39%E2%80%AFPM.png)](.files/2024-02-06%2023-52-58.mp4)

What's expected about this implementation:
- Code should not be duplicated for each stat. The functionality should be reusable for any number of stat.
- I recommend the use of **custom data attributes** (e.g. `data-stat-value`, `data-stat-increment` and `data-stat-decrement`), but anything else should also work. It's good practice to keep class names for styles, but can also be used in JavaScript