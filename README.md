# Nudger Bootstrap UI Kit

![alt text](https://nudger.fr/assets/img/nudger-logo.png "Nudger logo")

This kit is built upon a commercial licence of [Pixel Pro Bootstrap UI Kit](https://demo.themesberg.com/pixel-pro/), you will find the original documentation below.

## Context


Original templating is availlable on [nudger.fr](https://nudger.fr). A full re-design being engaged, this repository aims to bring a new, brillant and amazing front for the nudgers.

The features and pages to be implemented are availlable here. As a reference, the original nudger pages have to be considered as the input for designing the new pages, meaning all components / features avalable on original pages have to be implemented in re-designed pages.

## Continuous Integration / Continuous delivery

The Npm / gulp build is operated through github-actions, on push / merge. The "dist" site is available [on the nudger front github pages](https://open4good.github.io/nudger-front/)

## Pages

| **Page**                   | **Originale**                                                                                              | **Cible**                                                                                           |
|----------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Page d'accueil             | <a href="https://nudger.fr" target="_blank">source</a>                                                     | <a href="https://open4good.github.io/nudger-front/dist/index.html" target="_blank">cible</a>        |
| Page verticale             | <a href="https://nudger.fr/televiseurs" target="_blank">source</a>                                         | <a href="https://open4good.github.io/nudger-front/dist/html/pages/tv.html" target="_blank">cible</a>      |
| Page produit               | <a href="https://nudger.fr/televiseurs/8806094890273-tv-samsung-tq75qn700ctxxc" target="_blank">source</a> | <a href="https://open4good.github.io/nudger-front/dist/html/pages/tv-zoom.html" target="_blank">cible</a> |
| Page de recherche globale  | <a href="https://nudger.fr/recherche?q=moutarde" target="_blank">source</a>                                           |                                                                                                     |
| Page eco-score             | <a href="https://nudger.fr/ecoscore" target="_blank">source</a>                                            |                                                                                                     |
| Page compensation          | <a href="https://nudger.fr/compensation-ecologique" target="_blank">source</a>                             |                                                                                                     |
| Page Numerique responsable |                                                                                                            |                                                                                                     |
| Page Modèle ouvert         |                                                                                                            |                                                                                                     |
| Page open data             | <a href="https://nudger.fr/opendata" target="_blank">source</a>                                            |                                                                                                     |
| Page open source           |                                                                                                            |                                                                                                     |
| Page partenaires           | <a href="https://nudger.fr/partenaires" target="_blank">source</a>                                         |                                                                                                     |
| Page équipe                | <a href="https://nudger.fr/equipe" target="_blank">source</a>                                              |                                                                                                     |
| Page nous contacter        | <a href="https://nudger.fr/contact" target="_blank">source</a>                                             |                                                                                                     |
| Page blog                  | <a href="https://nudger.fr/blog" target="_blank">source</a>                                                |                                                                                                     |
| Page blog post             | <a href="https://nudger.fr/blog/ouvertureduprototype" target="_blank">source</a>                           |                                                                                                     |
| Page feedback evolution    | <a href="https://nudger.fr/feedback/idea" target="_blank">source</a>                                       |                                                                                                     |
| Page feedback bug          | <a href="https://nudger.fr/feedback/issue" target="_blank">source</a>                                        |                                                                                                     |
| Page extension web         |                                                                                                            |                                                                                                     |
|                            |                                                                                                            |                                                                                                     |
|                            |                                                                                                            |                                                                                                     |



# [Pixel Pro Bootstrap UI Kit](https://demo.themesberg.com/pixel-pro/)


Pixel is a accessibility oriented, fully responsive, modern User Interface Kit that will help you build creative and professional websites. Use our components and sections, switch some Sass variables to build and arrange pages to best suit your needs.

**Over 1k Components**

Buttons, timelines, blog cards, profile cards, tables, accordions... you name it and we have it.

Our components are a perfect extension of Bootstrap 4 so you will find it very easy to work with our code if you're familiar with their class names and styles. Furthermore, we've made sure to that all components are well documented.

Checkout all [all components here](https://demo.themesberg.com/pixel-pro/html/components/all.html).

**50+ Sections**

Sections are made up of components. These are the big boys and they include the navigation bars, footers, about sections, contact sections and many more.

We believe that our navigation bars are one of the most customizable ones out there. You can change the whole color scheme just by changing a letter amongst the classes. Why not check them out under the "Sections" category?

**17 Example Pages**

These are the last building blocks to build an awesome website. We made sure to offer you a few example pages to prove how useful and great our UI Kit is.

**Complete Documentation**

Each component, plugin and the general workflow is well documented. Check out the [online documentation for Pixel Pro](https://themesberg.com/docs/bootstrap-5/pixel/getting-started/quick-start/).

## Workflow

This product is built using the following widely used technologies:

- Most popular CSS Framework Bootstrap
- Productive workflow tool Gulp
- Awesome CSS preprocessor Sass

## Table of Contents

* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Demo

-   [Live Preview](https://demo.themesberg.com/pixel-pro/)
-   [Product Page](https://themesberg.com/product/ui-kit/pixel-pro-premium-bootstrap-5-ui-kit)

## Quick start

1. Purchase from [Themesberg](https://themesberg.com/product/ui-kit/pixel-pro-premium-bootstrap-5-ui-kit)
2. Download the project's zip
3. Make sure you have Node locally installed.
4. Download Gulp Command Line Interface to be able to use gulp in your Terminal.

```
npm install gulp-cli -g
```

5. After installing Gulp, run npm install in the main `rocket/` folder to download all the project dependencies. You'll find them in the `node_modules/` folder.

```
npm install
```

6. Run gulp in the `pixel/` folder to serve the project files using BrowserSync. Running gulp will compile the theme and open `/index.html` in your main browser.

```
gulp
```

While the gulp command is running, files in the `assets/scss/`, `assets/js/` and `components/` folders will be monitored for changes. Files from the `assets/scss/` folder will generate injected CSS.

Hit `CTRL+C` to terminate the gulp command. This will stop the local server from running.

## Theme without Sass, Gulp or Npm

If you'd like to get a version of our theme without Sass, Gulp or Npm, we've got you covered. Run the following command:

```
gulp build:dev
```

This will generate a folder `html&css` which will have unminified CSS, Html and Javascript.

## Minified version

If you'd like to compile the code and get a minified version of the HTML and CSS just run the following Gulp command:

```
gulp build:dist
```

This will generate a folder `dist` which will have minified CSS, Html and Javascript.

## Documentation
The documentation for Pixel Pro Bootstrap UI Kit is hosted on our [website](https://themesberg.com/docs/bootstrap-5/pixel/getting-started/quick-start/).

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources
- Demo: <https://demo.themesberg.com/pixel-pro/index.html>
- Download Page: <https://themesberg.com/product/ui-kit/pixel-pro-premium-bootstrap-5-ui-kit>
- Documentation: <https://themesberg.com/docs/bootstrap-5/pixel/getting-started/quick-start/>
- License Agreement: <https://themesberg.com/licensing>
- Support: <https://themesberg.com/contact>
- Issues: [Github Issues Page](https://github.com/themesberg/pixel-pro-bootstrap-ui-kit/issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for Pixel Pro Bootstrap UI Kit. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Argon Design System. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://themesberg.com/contact) instead of opening an issue.


## Licensing

- Copyright 2021 Themesberg (Crafty Dwarf SRL) (https://themesberg.com/)

- Themesberg [license](https://themesberg.com/licensing)


## Useful Links

- [More themes](https://themesberg.com/themes) from Themesberg
- [Free themes](https://themesberg.com/templates/free) from Themesberg
- [Affiliate Program](https://themesberg.com/affiliate)

##### Social Media

Twitter: <https://twitter.com/themesberg>

Facebook: <https://www.facebook.com/themesberg/>

Dribbble: <https://dribbble.com/themesberg>

Instagram: <https://www.instagram.com/themesberg/>
