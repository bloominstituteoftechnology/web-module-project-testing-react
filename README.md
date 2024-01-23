# Testing React Module Project - Stranger Things

## ✨ Requirements

1. Node >= 18.x
2. Git Bash (Windows users)

## ✨ Usage

1. Fork and clone repo
2. Run `npm install`
3. Run `npm run dev`
4. Run `npm test`
5. Load app in `http://localhost:3003`

## ✨ Prototype

![Stranger Example](project_example.gif)

## ✨ Instructions

Welcome to your Module Project! In this module you practiced testing React applications with React Testing Library.

In this project you will write tests for an existing website which displays information about the Stranger Things TV show.

### 🥷 Tasks

**❗ Preliminary notes about your tasks:**

- Watch the first minutes of the **Solution Video** if you need help getting started.
- There is no need to install any extra NPM dependencies.
- You will make changes to two files:
  1. [App.test.js](./frontend/components/tests/App.test.js)
  2. [Episode.test.js](./frontend/components/tests/Episode.test.js)

#### 👉 TASK 1 - Study the UI

Load the application and get a sense of how it works by studying the component code and the interface in Chrome.

#### 👉 TASK 2 - Test the App component

Inside [App.test.js](./frontend/components/tests/App.test.js) you will write the tests found in that file.

The entire React component tree is being mounted completely for you to test, and the project includes mocking of the API using Mock Service Worker. This means that the tests do not depend on the API but rather on an imitation of it. This is set up for you, and you don't need to worry about it. Just remember it would be very bad if tests depended on a live API because this would make them slow and unreliable.

In these tests, you will check the presence of correct texts, but you will also operate the site the same way a real user would, thanks to the [User Event](https://testing-library.com/docs/user-event/intro/) library.

#### 👉 TASK 3 - Test the Episode component

Inside [Episode.test.js](./frontend/components/tests/Episode.test.js) you will write the tests found in that file.

This will be a totally different approach: instead of mounting the entire component tree and mocking the API, we will mount a single component in isolation, re-rendering it with a variety of props to make sure everything works correctly for the "happy path" and for a number of edge cases.

#### 👉 TASK 4 - Watch the Solution Video

This step is only required if you need help getting started or get stuck at any point. HAVE FUN!

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Redo the Guided Project for the module, or check out the Solution Video for this project. In these recordings, an industry expert walks you through their thinking in detail, while they solve the tasks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node >= V18 correctly installed in order to work. Sometimes Node can be misconfigured. Try deleting `node_modules` and running `npm install`. If this fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Can I edit the HTML or the CSS?</summary>

You can edit the CSS of the project to give it a personal touch so you can add it to your portfolio, but only after you've finished your tasks!

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Remember to use console.logs and breakpoints to troubleshoot your code. Do not panic if you see errors in the console, just read them carefully looking for clues.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

Execute `npm test` in your terminal. You can also do `npm test -- App.test.js` for example, to run a single test suite in isolation.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. This in practice creates restore points. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well. Research how to reset --hard to a specific commit.

</details>
