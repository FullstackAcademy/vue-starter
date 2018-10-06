# Design System

The vue-starter comes with a Design System that you can 100% customize.

# Brand

## Color Palette

<img :src="$withBase('/color-palette.jpg')" alt="architecture"> 

The naming convention of the color palette is structured in the following way

`Meaning`-`Weight`-`Shade`

following _Meanings_ are included:

- **primary** (Main Colors)
- **secondary** (Accent Colors)
- **tertiary** (Utility Colors)

the following _Weights_ are included:

- primary **1-2**
- secondary **1-5**
- tertiary **1-5**

and the following shades are included:

Shade | Opacity
------|--------
1     | 100 %
2     | 80 %
3     | 60 %
4     | 40 %
5     | 20 %
6     | 10 %
7     | 5 %

## Brand Colors
Every brand color is related to a color of the color palette.

### Brand Variations
These are the colors that we use to create different variations of components.

Variation        | Palette Color
-----------------|--------------
brand-primary   | primary-2-1
brand-secondary | secondary-1-1
brand-tertiary  | primary-1-5
brand-danger    | tertiary-1-1
brand-warn      | tertiary-2-1
brand-success   | tertiary-3-1

### Background Colors
These are the colors that we use for document backgrounds or sections on a page.

Variation                | Palette Color
-------------------------|--------------
bg-color                 | tertiary-4
bg-color-variant         | primary-1-6
bg-color-inverse         | tertiary-5
bg-color-variant-inverse | primary-1-3

### Text Colors
These are the colors that we use for document backgrounds or sections on a page.

Variation                    | Palette Color
-----------------------------|--------------
text-color                   | tertiary-5
text-secondary-color         | primary-1-3
text-color-inverse           | tertiary-4
text-secondary-color-inverse | primary-1-6
link-color                   | secondary-1-1
link-hover-color             | darken($link-color, 5%)

### Border Colors
These are the colors that we use for document backgrounds or sections on a page.

Variation            | Palette Color
---------------------|--------------
border-color         | primary-1-5
border-color-inverse | primary-1-2

## General Branding

### Spacing, Border Radius and Transitions

## Typography

### Headings

### Text Styles

## Layout

### Break points
