// Google translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

// Scroll to top
const scrollTopButton = document.getElementById("scroll-top-button");

// When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (scrollTopButton.style.display = "block")
    : (scrollTopButton.style.display = "none");
};
window.onscroll = () => scrollFunction();

// When the user clicks on the button, scroll to the top of the document
const scrollTopFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// loader animation
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader-container").style.visibility = "visible";
  } else {
    document.querySelector("#loader-container").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

// Hamburger menu
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Floating Contact Me Panel Container
const fixedIconButton = document.getElementById("fixed-icon");
const floatingPanelContainer = document.createElement("div");
floatingPanelContainer.setAttribute("class", "floating-panel-container");
floatingPanelContainer.innerHTML = `
<div class="floating-panel change-theme">
      <p>You motivate me! Let's connect</p>
      <button class="close-btn"><i class="fas fa-times" aria-label="Close"></i></button>
      <div class="floating-panel-button-container">
        <a href="contact.html"><button class="all-button" aria-label="Contact me">Get in touch</button></a>
        <a href="blog.html"><button class="all-button" aria-label="Read Blogs">Read blogs</button></a>
      </div>
      <ul>
        <li>
          <a href="https://codepen.io/sacsam005" target="_blank" aria-label="Connect with me on CodePen">
            <i class="fab fa-codepen" style="color:#171717"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sachinsamal6" target="_blank" aria-label="Connect with me on Twitter">
            <i class="fab fa-twitter" style="color:#1A8CD8"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sachin-samal005/" target="_blank"
            aria-label="Connect with me on LinkedIn">
            <i class="fab fa-linkedin" style="color:#0274B3"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/sachinsamal120" target="_blank" aria-label="Connect with me on Facebook">
            <i class="fab fa-facebook" style="color:#1877F2"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Sacsam005" target="_blank" aria-label="Connect with me on GitHub">
            <i class="fab fa-github" style="color:#14191E"></i>
          </a>
        </li>
      </ul>
      <p>Each contact with a human being is so rare, so precious, one should preserve it! - Anais Nin</p>
    </div>
`;
fixedIconButton.insertAdjacentElement("afterend", floatingPanelContainer);
fixedIconButton.addEventListener("click", function () {
  floatingPanelContainer.classList.toggle("visible");
  console.log("clicked");
});

const closeButton = floatingPanelContainer.querySelector(".close-btn");
closeButton.addEventListener("click", () => {
  floatingPanelContainer.classList.remove("visible");
});

// Load a GetInTouch popup after page load
window.addEventListener("load", function () {
  setTimeout(function open() {
    floatingPanelContainer.classList.add("visible");
  }, 3000);
});

// Appending footer to the HTML
const quotes = {
  home: "Developer: someone who can convert coffee and bread into software, vision and idea into business! - Web",
  blog: "Champion: someone who is bent over from exhaustion, drenched with sweat, when no one else is looking! - Eddi Gray",
  extras:
    "Experience: Wisdom is with the aged, and understanding in length of days! - Bible | Job 12:12",
};

const currentUrl = window.location.href;
let text;
if (currentUrl && currentUrl.endsWith("/blog.html")) {
  text = quotes.blog;
} else if (currentUrl && currentUrl.endsWith("/extras.html")) {
  text = quotes.extras;
} else {
  text = quotes.home;
}

const footer = document.createElement("footer");
const horizontalLine = document.getElementsByTagName("hr");
footer.setAttribute("class", "footer-section change-theme");

if (text) {
  const indexOfColon = text.indexOf(":");
  const indexOfHyphen = text.indexOf("-");
  const firstPart = text.substring(0, indexOfColon + 1);
  const middlePart = text.substring(indexOfColon + 1, indexOfHyphen);
  const lastPart = text.substring(indexOfHyphen, text.length);
  // console.log(firstPart);
  footer.innerHTML = `   
    <div class="container footer-section-grid">
      <div class="quote">
        <div class="quote">
          <strong><span>${firstPart}</span>${middlePart}<span>${lastPart}</span></strong>
        </div>
      </div>

      <div class="footer-social-links">
        <button class="footer-floating-btn all-button fw-bolder mb-1" aria-label="Contact me">Get in touch</button>
        <form class="form-inline">
          <div class="input-group">
            <input type="text" class="form-control email" placeholder="Send me an Email">
            <div class="input-group-prepend">
              <div class="input-group-text send-email">
                <a href="mailto:shachinmagar120.smATgmailDOTcom" onclick="this.href = this.href
                .replace(/AT/, '@')
                .replace(/DOT/, '.')"><i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <p class="text-center">&copy; 2023 | This page is maintained by
      <a href="#">
        <span>Sacsam005</span>
      </a>
    </p>
  `;
} else {
  footer.innerHTML = `
    <div class="container footer-section-grid">
      <p>Unknown page</p>
    </div>
  `;
}

for (let i = 0; i < horizontalLine.length; i++) {
  horizontalLine[i].insertAdjacentElement("afterend", footer);
}

const getInTouchButtonFromFooter = document.querySelector(
  ".footer-social-links .footer-floating-btn"
);
getInTouchButtonFromFooter.addEventListener("click", function () {
  floatingPanelContainer.classList.toggle("visible");
});

// TODO: Used a proper CSS className for background and text colors in dark theme. Reduced the amount of code.
// Dark theme variables declarations
const themeBtn = document.getElementById("theme-btn");
const changeTheme = document.querySelectorAll(".change-theme");
let darktheme = localStorage.getItem("dark-theme");

// Toggle Dark theme while clicking on toggle button
// themeBtn.onclick = () => {
//   themeBtn.classList.toggle("fa-sun");

//   if (themeBtn.classList.contains("fa-sun")) {
//     document.body.classList.add("dark-theme");
//     localStorage.setItem("dark-theme", "dark");

//     for (const theme of changeTheme) {
//       theme.style.backgroundColor = "#2E386A";
//       theme.style.color = "#eee";
//     }
//   } else {
//     document.body.classList.remove("dark-theme");
//     localStorage.removeItem("dark-theme", "dark");

//     for (const theme of changeTheme) {
//       theme.style.backgroundColor = "#fff";
//       theme.style.color = "#222";
//     }
//   }
// };

//Dark theme across different pages saved in local storage
const enableDarkTheme = () => {
  document.body.classList.add("dark-theme");
  themeBtn.classList.remove("changeTheme");
  themeBtn.classList.toggle("fa-sun");
  for (const theme of changeTheme) {
    theme.style.backgroundColor = "#2E386A";
    theme.style.color = "#eee";
  }
  localStorage.setItem("dark-theme", "enabled");
};

const enableLightTheme = () => {
  document.body.classList.remove("dark-theme");
  themeBtn.classList.add("changeTheme");
  themeBtn.classList.toggle("fa-sun");
  for (const theme of changeTheme) {
    theme.style.backgroundColor = "#fff";
    theme.style.color = "#222";
  }
  localStorage.setItem("dark-theme", "disabled");
};

if (darktheme === "enabled") {
  // Set state of darktheme on page load
  enableDarkTheme();
}

themeBtn.addEventListener("click", (e) => {
  darktheme = localStorage.getItem("dark-theme");
  // Update darktheme when clicked
  if (darktheme === "disabled") {
    enableDarkTheme();
  } else {
    enableLightTheme();
  }
});
