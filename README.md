# Portfolio 2023

# Header

- Menu Button
```html
  <!-----Menu Button----->
    <div id="menuBtn" class="flex-col" onclick="menuToggle()">
      <div id="bar1" class="bar"></div>
      <div id="bar2" class="bar"></div>
      <div id="bar3" class="bar"></div>
    </div>
```

- Icon SVG
```html
 <!---Logo------------>
    <svg id="logo-38" class="float-R" width="60" height="100%" viewBox="0 0 78 32" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="var(--accent)"></path>
      <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="var(--primary)"></path>
      <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="var(--light)"></path>
    </svg>
```

# Body

## Hidden By Default

- Mobile Nav

```html
 <!-----Mobile Nav Off Screen ----->
  <main id="mobileNav" class="container secondaryBG hide">
  <!---Nav List----->
    <ul class="nav-list center">
      <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Projects</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    <!---Button Container-->
   <div class="auto">
     <li class="nav-itam"><button type="button" id="login" onclick="loginToggle()" class="accentBG box1 bold">Login</button></li>
     <li class=""nav-item"><button type="button" id="register" class="primaryBG box1 bold" onclick="signUpToggle()">Sign Up</button></li>
     </div>
    </ul>
  </main>
```

- Login Form

```html
<!---Opens with Login Button--->
<main id="loginTemplate" class="primaryBG hide">
  <form action="login.php" method="post" class="lightBG centerDiv">
    <!---Label & Input Container--->
    <div class="container">
      <!---Username--->
      <label for="userName" class="bold">Username</label>
      <input
        type="text"
        id="userName"
        placeholder="Enter Username"
        name="userName"
        autocomplete="true"
        required
      />
      <!---Password--->
      <label for="password" class="bold">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter password..."
        name="password"
        autocomplete="true"
        required
      />

      <!---Submit Button--->
      <button type="button" class="accentBG bold" onclick="login()">
        Submit
      </button>

      <!--- Remember Me Checkbox--->
      <label for="remember">
        <input type="checkbox" checked="checked" name="remember" />
        <span class="pl-10 text-light">Remember me</span></label
      >
      <button type="button" class="primaryBG" onclick="cancelBtn()">
        Cancel
      </button>
    </div>
  </form>
</main>
```

- Sign Up Form

```html
<!-----Opens with Sign Up Button------------------>
<main id="signUpTemplate" class="hide">
  <div class="container">
    <form
      action="action_page.php"
      id="signUpForm"
      class="secondaryBG auto box1"
    >
      <label for="fName">First Name</label>
      <input type="text" id="fName" />
      <label for="lName">Last Name</label>
      <input type="text" id="lName" />
      <label for="email">Email</label>
      <input type="email" id="email" />
      <label for="phone">Phone</label>
      <input type="tel" id="phone" />
      <label for="city">City</label>
      <input type="text" id="city" />
      <label for="statelist">State</label>
      <select name="state" id="statelist">
        <option value="null"></option>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
      </select>
      <label for="comments">Comments</label>
      <textarea name="comments" id="comments" cols="30" rows="10"></textarea>

      <!---Submit Button--->
      <button type="button" class="accentBG bold" onclick="signUp()">
        Submit
      </button>

      <button
        type="button"
        class="primaryBG bold cancelBtn"
        onclick="cancelBtn()"
      >
        Cancel
      </button>
    </form>
  </div>
</main>
```

# Footer

## Github Pages Link
https://tommygoverstreet.github.io/portfolio2023/
