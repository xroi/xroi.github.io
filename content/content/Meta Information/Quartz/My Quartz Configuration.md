This note details some steps I took in my personal quartz configuration. Mostly intended for my own memory but also in case anyone want to replicate it.

* Removal of the backlinks view by commenting out the usage of `Component.Backlinks()` from `quartz.layout.ts`.
* Moved the graph view to the left.
* Modification of the footer in `Footer.tsx`
* Added a header with `LinksHeader.tsx` and `linksHeader.scss`.
* moved the light/dark mode switch button to the top right corner of the centre div.
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