// Copy blog links onclick
// TODO: Copy Blog links when corresponding fa-copy icon is clicked...
const blogItemCopyElements = document.querySelectorAll(".blog-item-copy");

function copyLink(event) {
  const blogItemCopy = event.currentTarget;
  const blogItem = blogItemCopy.closest(".blog-container");
  const link = blogItem.querySelector("a").getAttribute("href");
  console.log(link);

  navigator.clipboard.writeText(link).then(
    function () {
      const span = document.createElement("span");
      span.setAttribute("class", "copy-link-span");
      span.innerText = "Link Copied";
      span.style.display = "block";
      setTimeout(function () {
        span.style.display = "none";
      }, 1500);
      blogItem.append(span);
    },
    function (err) {
      console.error("Failed to copy: ", err);
    }
  );
}

blogItemCopyElements.forEach((blogItemCopy) => {
  blogItemCopy.addEventListener("click", copyLink);
});

// Load more blogs for blog page
const loadMoreBtn = document.querySelector("#load-more-btn");
const noContentBtn = document.getElementById("no-content-btn");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".blog-container")];

  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }

  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
    noContentBtn.setAttribute(
      "style",
      "display: block; pointer-events: none; opacity: 0.75"
    );
  }
};
