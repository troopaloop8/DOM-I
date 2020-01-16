const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
document
  .getElementById("logo-img")
  .setAttribute("src", siteContent["nav"]["img-src"]);

//modifications to the header

let headers = document.querySelectorAll("a");
// headers[0].textContent = siteContent["nav"]["nav-item-1"];
// headers[1].textContent = siteContent["nav"]["nav-item-2"];
// headers[2].textContent = siteContent["nav"]["nav-item-3"];
// headers[3].textContent = siteContent["nav"]["nav-item-4"];
// headers[4].textContent = siteContent["nav"]["nav-item-5"];
// headers[5].textContent = siteContent["nav"]["nav-item-6"];

/* CLEAN ABSTRACTION OF ABOVE CODE */
[...headers].forEach(
  /*the [...placeholder] syntax is used to turn dom selectors other than queryselectors into object arrays*/
  (a, idx) => (a.textContent = siteContent["nav"][`nav-item-${1 + idx}`])
);

// headers[0].style.color = "green";
// headers[1].style.color = "green";
// headers[2].style.color = "green";
// headers[3].style.color = "green";
// headers[4].style.color = "green";
// headers[5].style.color = "green";

/* CLEAN ABSTRACTION OF ABOVE CODE */
headers.forEach(a => {
  return (a.style.color = "green");
});

//modifications to the cta section

document
  .getElementById("cta-img")
  .setAttribute("src", siteContent["cta"]["img-src"]);

document.querySelector("h1").textContent = siteContent["cta"]["h1"];

document.querySelector("button").textContent = siteContent["cta"]["button"];

//modifications to the main-content section

let featuresBoxHeader = document.querySelectorAll(".text-content *");

// featuresBoxHeader[0].textContent = siteContent["main-content"]["features-h4"];
// featuresBoxHeader[1].textContent = siteContent["main-content"]["about-h4"];
// featuresBoxHeader[2].textContent = siteContent["main-content"]["services-h4"];
// featuresBoxHeader[3].textContent = siteContent["main-content"]["product-h4"];
// featuresBoxHeader[4].textContent = siteContent["main-content"]["vision-h4"];
// let featureBoxContent = document.querySelectorAll(".text-content p");
// featureBoxContent[0].textContent = siteContent["main-content"]["features-content"];
// featureBoxContent[1].textContent = siteContent["main-content"]["about-content"];
// featureBoxContent[2].textContent = siteContent["main-content"]["services-content"];
// featureBoxContent[3].textContent = siteContent["main-content"]["product-content"];
// featureBoxContent[4].textContent = siteContent["main-content"]["vision-content"];

/*MUCH MORE ABSTRACTED CODE OF THE ABOVE EFFECTS */

let featureHeaderData = Object.entries(siteContent["main-content"])
  .map(element => element[1])
  .filter(e => e !== "img/mid-page-accent.jpg");

featuresBoxHeader.forEach((e, idx) => (e.textContent = featureHeaderData[idx]));

document
  .getElementById("middle-img")
  .setAttribute(["src"], siteContent["main-content"]["middle-img-src"]);

//modifications to the contact section

// let contactHeader = document.querySelector(".contact h4");
// contactHeader.textContent = siteContent["contact"]["contact-h4"];
// let contactInfo = document.querySelectorAll(".contact p");
// contactInfo[0].textContent = siteContent["contact"]["address"];
// contactInfo[1].textContent = siteContent["contact"]["phone"];
// contactInfo[2].textContent = siteContent["contact"]["email"];

//ABSTRACTED VERSION OF ABOVE CODE

let elements = document.querySelectorAll(".contact *");
//convert contact info into an array of key value pairs
let data = Object.entries(siteContent["contact"]).map(element => element[1]);

//entries method compreeses object to array of key value pairs and the map function as follows gets the value of the key value pair

elements.forEach((e, idx) => (e.textContent = data[idx]));

//modifications to the footer section

document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];

//APPEND AND PREPEND additions

let navBar = document.querySelector("nav");

let appendNav = document.createElement("A");
appendNav.setAttribute("href", "#");
appendNav.textContent = "More...";
appendNav.style.color = "green";

navBar.appendChild(appendNav);

let prependNav = document.createElement("A");
prependNav.setAttribute("href", "#");
prependNav.textContent = "Home";
prependNav.style.color = "green";

navBar.prepend(prependNav);
