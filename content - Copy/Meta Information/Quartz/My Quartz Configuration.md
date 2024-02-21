This note details some steps I took in my personal quartz configuration. Mostly intended for my own memory but also in case anyone want to replicate it.

* Removal of the graph and backlinks view by commenting out the usage of `Component.Graph()` and `Component.Backlinks()` from `quartz.layout.ts`.
* Modification of the footer in `Footer.tsx`
* Added a header with `LinksHeader.tsx` and `linksHeader.scss` .
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