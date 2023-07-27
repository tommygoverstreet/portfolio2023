# JavaScript

## Portfolio 2023

### Variables

```js
// Assign Symbols to Query Selectors
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
```

### Functions

#### Toggles Mobile Nav Menu

```js
// Menu Toggle
const menuToggle = () => {
  $("#mobileNav").classList.toggle("hide");
  $("#bar1").classList.toggle("change1");
  $("#bar2").classList.toggle("change2");
  $("#bar3").classList.toggle("change3");
};
```

#### Opens Login Form

```js
// Login Form Toggle
const loginToggle = () => {
  $("#mobileNav").classList.add("hide");
  $("#bar1").classList.remove("change1");
  $("#bar2").classList.remove("change2");
  $("#bar3").classList.remove("change3");
  $("#loginTemplate").classList.toggle("hide");
};
```

#### Opens Sign Up Form

```js
const signUpToggle = () => {
  $("#mobileNav").classList.add("hide");
  $("#bar1").classList.remove("change1");
  $("#bar2").classList.remove("change2");
  $("#bar3").classList.remove("change3");
  $("#signUpTemplate").classList.toggle("hide");
};
```

#### Closes Forms from Cancel Button

```js
const cancelBtn = () => {
  $("#signUpTemplate").classList.add("hide");
  $("#loginTemplate").classList.add("hide");
}
```

## Global

### Assign $ & \$$ to Query Selectors

```js
// Assign Symbols to Query Selectors
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
```

```js
```

```js
```

## Examples

```js
```

```js
```

```js
```
