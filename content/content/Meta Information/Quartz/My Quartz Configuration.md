This note details some steps I took in my personal quartz configuration. Mostly intended for my own memory but also in case anyone want to replicate it.

* Removal of the backlinks view by commenting out the usage of `Component.Backlinks()` from `quartz.layout.ts`.
* Moved the graph view to the left.
* Modification of the footer in `Footer.tsx`
* Added a header with `LinksHeader.tsx` and `linksHeader.scss`.
* Moved the light/dark mode switch button to the top right corner of the centre div.
* Had to set `markdownLinkResolution: "relative"` to prevent broken links.
* Typography used: 
```
typography: {  
	  header: "Fredericka the Great",  
	  body: "Source Sans Pro",  
	  code: "IBM Plex Mono",  
}
```
* Colours used:
```
colors: {  
  lightMode: {  
    light: "#faf8f8",  
    lightgray: "#e5e5e5",  
    gray: "#b8b8b8",  
    darkgray: "#4e4e4e",  
    dark: "#2b2b2b",  
    secondary: "#284b63",  
    tertiary: "#84a59d",  
    highlight: "rgba(143, 159, 169, 0.15)",  
  },  
  darkMode: {  
    light: "#161618",  
    lightgray: "#393639",  
    gray: "#646464",  
    darkgray: "#d4d4d4",  
    dark: "#ebebec",  
    secondary: "#aa7ba9",  
    tertiary: "#a58484",  
    highlight: "rgba(255, 0, 179, 0.15)",  
  }
}
```

#### RTL Support
RTL used to be supported in quartz (v3.2) but is absent in the latest version (v4). A solution for page-specific right-to-left support was to add a `cssclass` to the frontmatter of specific notes.
In the notes:
```
---
title: some page with right to left text.
cssclass: rtl-class
---
```
In the `custom.scss` file:
```css
.rtl-class,
.rtl-class *:not(.math) {
  direction: rtl;
}```
Example: [רשימת הגדרות, אלגוריתמים, נוסחאות מסדי נתונים](../../Random/רשימת%20הגדרות,%20אלגוריתמים,%20נוסחאות%20מסדי%20נתונים.md)