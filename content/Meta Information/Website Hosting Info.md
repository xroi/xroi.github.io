This note holds general information regarding my workflow and they way I publish content in this website.

Tools Used:
* Obsidian
* "Shell Commands" Obsidian Plugins
* Quartz 4.0
* GitHub Pages
* WebStorm

Some useful links:
* [Quartz Documentation](https://quartz.jzhao.xyz/)
* [Quartz GitHub Repository](https://github.com/jackyzha0/quartz)
* [My GitHub Repository](https://github.com/xroi/xroi.github.io)
* ["Shell Commands" Obsidian Plugin Documentation](https://publish.obsidian.md/shellcommands/Index)

I cloned the quartz repository and placed the obsidian vault inside the `contents` folder.
For most technical and general website configuration operations I use WebStorm. For content manipulation, I use obsidian.

To build and host the website locally, I use:
```
npx quartz build --serve --port 34621
```
The random port was chosen since the default one (8080) is probably in use by something else.

To build and push the website to GitHub, I use:
```
npx quartz sync
```

I use the shell command plugin in order to run these commands straight from the obsidian editor.
For example, here's a link to the previous command as an obsidian URL [Build & Push](obsidian://shell-commands/?vault=content&execute=un0sfyl7nj) (Does nothing on the static website).

