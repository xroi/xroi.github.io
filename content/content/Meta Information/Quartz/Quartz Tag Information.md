Abbreviated mostly from [here](https://quartz.jzhao.xyz/authoring-content).

- `title`: Title of the page. If it isn’t provided, Quartz will use the name of the file as the title.
- `description`: Description of the page used for link previews.
- `aliases`: Other names for this note. This is a list of strings.
- `tags`: Tags for this note.
- `draft`: Whether to publish the page or not. (Page will still be in the repository (?)).
- `cssclasses`: For adding custom CSS, for example RTL support (see [My Quartz Configuration](My%20Quartz%20Configuration.md)).

These are added as properties in the following format at the start of a document:

```
---
title: Example Title
draft: false
tags:
  - example-tag
---
 
The rest of your content lives here. You can use **Markdown** here :)
```


