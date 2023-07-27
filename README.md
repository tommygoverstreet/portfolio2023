---
description: Styling  for portfolio project
---

# CSS

## Root

```css
:root {
  --primary: #021936;
  --secondary: #d4d5da;
  --accent: #fc5508;
  --dark: rbg(0, 0, 0);
  --light: rgb(255, 255, 255);
  --submit: rbg(0, 255, 0);
  --cancel: rgb(255, 25, 25);
}
```

### All Elements

```css
html,
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  letter-spacing: 0.02em;
}
```

### Body Element

```css
body {
  width: 100vw;
  font-family: Aerial, Helvetica, sans-serif;
  font-size: 1.2em;
  overflow-x: hidden;
}
```

### Main Body Elements

```css
header,
main,
section,
footer {
  width: 100%;
}

header {
  height: 8vh;
  padding: 0px 25px;
  position: fixed;
  z-index: 10;
}

main {
  min-height: 100vh;
  padding-top: 12vh;
}
```

### Form

#### Main Elements

```css
/*---Form---*/
form {
  width: 85%;
  max-width: 500px !important;
  padding: 15px;
  font-size: 1em;
  border-radius: 12px;
}

label {
  margin-top: 40px;
}

button,
textarea,
select,
input,
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="text"],
input[type="dropdown"] {
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 8px;
  font-size: 0.8em;
  width: 100%;
}

input,
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="text"] {
  display: inline-block;
  border: 1px solid var(--primary);
}

button {
  border: none;
  cursor: pointer;
  letter-spacing: 0.1em;
  margin-top: 18px;
}

select option {
  color: var(--dark);
}

datalist {
  display: none;
}
```

### Stacked Bar Icon

```css
/* Stacked Bar Icon */
#menuBtn {
  width: 40px;
  background: transparent;
  cursor: pointer;
  padding-top: 8px;
  float: left;
  z-index: 5;
}

/* Bars */
#menuBtn .bar {
  height: 5px;
  background: var(--accent);
  margin-top: 5px;
  border-radius: 4px;
}

/* Transform X for Close Button */
.change1 {
  transform: translate(0, 9px) rotate(-45deg);
}

.change2 {
  opacity: 0;
}

.change3 {
  transform: translate(0, -9px) rotate(45deg);
}
```

### Navigation

#### Global

```css
/* Remove List Style Type */
.nav-list {
  list-style: none;
}

.nav-list div {
  width: 35%;
}

/* Remove Text Decoration from menu links */
.nav-link {
  text-decoration: none;
  color: var(--accent);
}
```

#### Mobile

```css
/* Mobile Nav Off Screen */
#mobileNav {
  width: 100vw;
  height: 90vh;
  z-index: 4;
  position: fixed;
  overflow: hidden;
}

/* Mobile Nav List */
#mobileNav .nav-list {
  display: flex;
  flex-direction: column;
}

/* Mobile Nav List Item */
#mobileNav .nav-list .nav-item {
  font-size: 1.8em;
  margin-top: 25px;
}
```

## Containers

### Sign Up Form Container

```css
#signUpTemplate .container {
  width: 100%;
  height: 100%;
  padding-bottom: 75px;
}
```

## Decorative Classes

### Font & background Colors

```css
/*---Backgrounds----------------------*/
/* Dark Background Default */
.secondaryBG {
  background: var(--secondary);
  color: var(--primary);
}

/* Light Background (Default) */
.primaryBG {
  background: var(--primary);
  color: var(--light);
}

/* Accent Background */
.accentBG {
  background: var(--accent);
  color: var(--light);
}

/* White background */
.lightBG {
  background: var(--light);
  color: var(--primary);
}
```

### Bold Text

```css
/* Bold Text */
.bold {
  font-weight: 800;
}
```

### Box Shadows

```css
/*---Box Shadows---*/
/* Dark Shadow */
.box1 {
  box-shadow: 1px 1px 8px var(--secondary);
  border: none;
}

/* Light Background */
.box2 {
  box-shadow: 1px 1px 8px var(--primary);
  border: none;
}
```

## Position & Alignment Classes

### Floats

```css
/*---Float Right---*/
.float-R {
  float: right;
}

/*---Float Left---*/
.float-L {
  float: left;
}
```

### Even Width Grid Columns

```css
/*---Even Grid Columns---*/
.g2,
.g3,
.g4,
.g5,
.g6,
.g7,
.g8,
.g9,
.g10,
.g11,
.g12 {
  display: grid;
}

.g2 {
  grid-template-columns: repeat(2, 1fr);
}

.g3 {
  grid-template-columns: repeat(3, 1fr);
}

.g4 {
  grid-template-columns: repeat(4, 1fr);
}

.g5 {
  grid-template-columns: repeat(5, 1fr);
}

.g6 {
  grid-template-columns: repeat(6, 1fr);
}

.g7 {
  grid-template-columns: repeat(7, 1fr);
}

.g8 {
  grid-template-columns: repeat(8, 1fr);
}

.g9 {
  grid-template-columns: repeat(9, 1fr);
}

.g10 {
  grid-template-columns: repeat(10, 1fr);
}

.g11 {
  grid-template-columns: repeat(11, 1fr);
}

.g12 {
  grid-template-columns: repeat(12, 1fr);
}
```

### Flexbox

```css
/* Display Flex */
.flex-row,
.flex-col {
  display: flex;
}
```

#### Row

```css
/* Flex Row */
.flex-row {
  flex-direction: row;
}
```

#### Column

```css
/* Flex Column */
.flex-col {
  flex-direction: column;
}
```

### Margin

```css
.auto {
  margin: auto;
}

.mt-80 {
  margin-top: 80px;
}

.mt-100 {
  margin-top: 100px;
}

.mr-10 {
  margin-right: 10px;
}
```

### Padding

```css
.pl-10 {
  padding-left: 10px;
}

.pr-10 {
  padding-right: 10px;
}
```

### Center a DIV element

```css
/* X & Y Center Div */
.centerDiv {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
```

### Center Text

```css
/* Center Text */
.center {
  text-align: center;
}
```

### Hide Content

```css
/* Hide Content */
.hide {
  display: none;
}
```

## Screen Sizing Adjustments & breakpoints

### Max Screens / Width

#### Max 600px

```css
/* Smaller than 600px */
@media screen and (max-width: 600px) {
  span.password {
    display: block;
    float: none;
  }
}
```

#### Max 900px

```css
/* Smaller than 900px */
@media screen and (max-width: 900px) {
  #loginForm {
    display: flex;
    flex-direction: column;
  }
}
```

### Combo Media Query

#### Between 600px & 900px

```css
/* Larger than 600px but smaller than 900px*/
@media screen and (min-width: 600px) and (max-width: 899px) {
  
}
```

### Min Screens / Width

#### Min 600px

```css
/* Larger than 900px */
@media screen and (min-width: 600px) {
  
}
```

#### Min 900px

```css
/* Larger than 900px */
@media screen and (min-width: 900px) {
  
}
```

### Max Screens / Height

#### Max Height 550px

```css
@media screen and (max-height: 550px) {
  header {
    height: 12vh;
  }
  #menuBtn {
    transform: scale(0.8);
  }
}
```

#### Max Height 362px

```css
@media screen and (max-height: 362px) {
  #logo-38, #menuBtn {
transform: scale(0.6);
  }
}
```

### Min Screens / Height

```css
```
