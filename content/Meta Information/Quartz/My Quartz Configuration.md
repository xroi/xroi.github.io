This note details some steps I took in my personal quartz configuration, both for my own rememberance and in case anyone want to replicate it.

* Removal of the graph and backlinks view by commenting out the usage of `Component.Graph()` and `Component.Backlinks()` from `quartz.layout.ts`.
* Modification of the footer in `Footer.tsx`
* Added a header with `LinksHeader.tsx` and `linksHeader.scss` .