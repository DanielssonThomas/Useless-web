![This is an image](https://media.tenor.com/EgkVXwM-f9IAAAAd/useless-box-box.gif)

# Useless view

A nice view runied by random text or emojis. Netlify: https://useless-webb-nice-view.netlify.app/

# Installation

Clone repository and run index.html

# Code Review

1. `index.html:4` - Trailing slashes in void elements have no effect.
2. `index.hmtl:16` - If only using the section element as a styling wrapper, then a div element might be a better choice.
3. `index.html:35` - Since the article element doesn’t contain anything more than a heading and a button, another type of element might be better suited.
4. `index.hmtl:67` - The for attribute value should specify the id of the input element it is bound to (instead of class name).
5. `typography.css:19` - The property value “medium” isn’t a font-weight value.

# Testers

Tested by the following people:

1. Douglas Lindahl
2. Lucas Källberg
