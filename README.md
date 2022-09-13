# Exercise: React Hooks

## Exercise 1: FilmsList from Class to Function
1. Change the FilmsList from a class to a function
1. Remove the render method surround the return `<ul>...</ul>` statement
    * we'll still be using the returned JSX, so be sure to keep that
1. Specify props as the parameter to the FilmsList function

## Exercise 2: State Hook in FilmsList
1. Import and destructure `useState` from the `react` package
1. Remove the constructor
1. Add a declaration for `list` and `setList` that will be destructured from an array that is returned from calling `useState([])`
1. Update the return statement to map over `list` instead of `this.state.list`

## Exercise 3: Update getFilms
1. `getFilms` is currently a method. Add the `function` keyword to make it a function value within this component scope
1. Update the promise consumer that updates the list state
    * Change `this.setState()` to `setList`
    * Be sure to only pass in the `films` data, no longer `{ list: films }`

## Exercise 4: Effect Hook in FilmsList
1. Import and destructure `useEffect` from the `react` package
1. Remove the `componentDidMount` method
1. Call `useEffect`
    * first, pass in a callback function that will call `getFilms`
    * second, pass in an empty dependency array

## Exercise 5: App from Class to Function#
1. Change the `App` from a class to a function
1. Remove the `render` method surround the `return ...` statement
    * we'll still be using the returned JSX, so be sure to keep that
1. Specify `props` as the parameter to the `App` function

## Exercise 6: State Hook in App#
1. Import and destructure useState from the react package
1. Remove the constructor
1. Add a declaration for list and setList that will be destructured from an array that is returned from calling useState(["ready", "set", "GO"])
1. Add a declaration for text and setText that will be destructured from an array that is returned from calling useState("")
1. Update the return statement to map over list instead of this.state.list
1. Update the return statement's input value to be text instead of this.state.text
1. Update the return statement's input onChange to call setText instead of this.setState

## Exercise 7: Update onSubmit
1. onSubmit is currently a method. Add the function keyword to make it a function value within this component scope
1. Update the function to:
use list instead of this.state.list
use text instead of this.state.text
use setList instead of this.setState
1. Update the return statement's form onSubmit to be onSubmit instead of this.onSubmit
Helpful Links#
If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

