Electrolyte
===========

Welcome to Electrolyte: a lightweight, flexible, fun prototyping tool for Agile Central.
> It's what plants crave!

What's in the tin
-----------------
- [Next.js for rendering & routing (React/Webpack/Babel)](https://zeit.co/blog/next)
- [Tachyons for styling](http://tachyons.io)
- [Gulp for compiling SCSS](http://gulpjs.com)

To get started with Electrolyte:
--------------------------------
1. Open a terminal and run `npm run dev` to get next.js started
2. Open a second terminal and run `gulp` to get CSS compiling, since next.js doesn't include it out of the box.

Frequently Asked Questions
--------------------------

> Why are two commands necssary here?

As it currently stands, Next.js (the layer providing React routing and server-side rendering) works using `glamor` and prefers inline CSS. This is silly, so I wrote another build script for using SCSS in this project.

> What component library are you using?

The SCSS of this project is defined in such a way as to use CSS-only components, implemeneted with higher-order SCSS classNames. This is a long way of saying that we are using a custom component library that wraps the Tachyons CSS framework. The way that this is done ensures that we can switch to another CSS-only component library without changing any markup. :)

> Wait, what?

So, this is how a styled component works in Electrolyte:

`<MyAwesomeComponent>Some really cool content!</MyAwesomeComponent>`

Not that big of a deal, right? What's happening within that component is this:

`<div className="MyAwesomeComponent">{ this.props.children }</div>`

Also not that big of a deal, but you'll notice that this component is still as-of-yet unstyled. The magic happens here, in the SCSS file for this component:
`.MyAwesomeComponent {
    @extend .sans-serif;
  }`

This example shows how to include the sans-serif font-family mixin from Tachyons.  
