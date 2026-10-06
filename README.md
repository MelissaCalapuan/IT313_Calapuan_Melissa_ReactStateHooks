# IT 313 – Lab Timer & Practice Tracker

## About the Project

This project is a small **React Native application built with Expo** for our IT 313 Mobile Programming laboratory activity.

The app works as a simple study and practice tracker. It allows a student to keep track of how many practice problems they have solved while also keeping track of how long they have been working.

The project was created to practice using React **state, hooks, event handling, conditional rendering, lifting state up, and custom hooks**.

## Features

The application includes the following features:

* A **Practice Tracker** that counts solved problems.
* A **Solve +1** button that increases the solved count.
* A **Reset** button that resets the solved count back to 0.
* A **Start** button that starts the stopwatch.
* A **Stop** button that pauses the stopwatch.
* A stopwatch that displays the elapsed time in `MM:SS` format.
* A **Running...** and **Paused** status depending on the stopwatch state.
* A **Great job!** message that appears after solving 5 or more problems.

## Components and Custom Hook

### PracticeTracker.tsx

`PracticeTracker` is responsible for displaying the practice problem counter and its buttons.

It receives the following props from `LabScreen`:

* `solved` – the current number of solved problems.
* `onSolve` – increases the solved count.
* `onReset` – resets the solved count.

It also uses conditional rendering to show **"Great job!"** when the solved count reaches 5.

### Stopwatch.tsx

`Stopwatch` displays the current elapsed time and the stopwatch status.

It receives:

* `seconds` – the current number of elapsed seconds.
* `isRunning` – tells the component whether the stopwatch is running or paused.

The seconds are converted into a simple `MM:SS` format. For example:

```text
00:05
01:20
05:45
```

The component also displays **"Running..."** while the stopwatch is active and **"Paused"** when it is stopped.

### useStopwatch.ts

`useStopwatch` is a custom React hook created specifically for the stopwatch.

It uses `useState` to keep track of the elapsed seconds and `useEffect` to run a `setInterval` every 1000 milliseconds while the stopwatch is running.

The interval is cleared when the stopwatch stops or when the component using the hook is unmounted. This cleanup prevents multiple intervals from continuing to run in the background.

### LabScreen.tsx

`LabScreen` is the main screen and the parent component of `PracticeTracker` and `Stopwatch`.

It owns the shared state:

* `solved` – starts at 0.
* `isRunning` – starts as `false`.
* `seconds` – comes from the `useStopwatch` custom hook.

The Start and Stop buttons are also handled in `LabScreen`.

This is an example of **lifting state up** because `PracticeTracker` and `Stopwatch` are sibling components. Instead of managing their shared state separately, the state is managed by their parent, `LabScreen`, and then passed down through props.

## React Concepts Used

### useState

`useState` is used to store values that can change while the application is running.

In this project, it is used for the solved problem count and the stopwatch's running state.

### useEffect

`useEffect` is used inside `useStopwatch` to create the timer using `setInterval`.

The effect also has a cleanup function that calls `clearInterval()`.

### Custom Hook

`useStopwatch` is a custom hook that keeps the stopwatch logic separate from the user interface.

This makes the timer logic easier to organize and reuse.

### Conditional Rendering

Conditional rendering is used for messages that depend on the current state.

For example:

* `Great job!` appears when `solved >= 5`.
* `Running...` appears when the stopwatch is running.
* `Paused` appears when the stopwatch is stopped.

### Event Handling

The buttons use `onPress` event handlers to perform actions such as:

* Increasing the solved count.
* Resetting the solved count.
* Starting the stopwatch.
* Stopping the stopwatch.

The event handlers are passed as function references instead of being called directly in the JSX.

## How to Run the Project

### 1. Install the project dependencies

Open a terminal inside the project folder and run:

```bash
npm install
```

### 2. Start the Expo development server

Run:

```bash
npx expo start
```

### 3. Open the application

After Expo starts, open the project using **Expo Go** on a mobile device or use an available emulator/simulator.

If using Expo Go, scan the QR code displayed by the Expo development server.

## Expected Behavior

When the application starts, the screen should show:

```text
Solved: 0
00:00
Paused
```

along with the **Solve +1**, **Reset**, **Start**, and **Stop** buttons.

When **Solve +1** is pressed, the solved counter increases by one.

After reaching five solved problems, the application displays:

```text
Great job!
```

Pressing **Reset** changes the solved count back to 0 without changing the stopwatch.

Pressing **Start** begins the stopwatch and changes the status to:

```text
Running...
```

Pressing **Stop** pauses the timer at its current value and changes the status back to:

```text
Paused
```


## Conclusion

This project helped me practice the basic React concepts needed to build interactive React Native applications. I learned how to manage changing data with `useState`, handle side effects with `useEffect`, clean up an interval properly, use conditional rendering, handle button events, and share state between components through a parent component.

The custom `useStopwatch` hook also helped separate the timer logic from the user interface, making the project easier to understand and maintain.
