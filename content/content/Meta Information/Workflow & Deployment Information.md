This note holds general information regarding my workflow and they way I publish content in this website. 
###### Tools Used
* Obsidian
* Obsidian Plugins:
	* Shell Commands
	* Waypoint
* Quartz 4.0
* GitHub Pages
* WebStorm

###### Some Useful Links
* [Quartz Documentation](https://quartz.jzhao.xyz/)
* [Quartz GitHub Repository](https://github.com/jackyzha0/quartz)
* [My GitHub Repository](https://github.com/xroi/xroi.github.io)
* ["Shell Commands" Obsidian Plugin Documentation](https://publish.obsidian.md/shellcommands/Index)

###### Workflow
I cloned the quartz repository and placed the obsidian vault inside the `content` folder.
For most technical and general website configuration operations I use WebStorm. For content manipulation, I use obsidian. This system allows to me to only be in contact with local markdown files in an isolated environment 99% of the time, while making deployment easy. 

To build and host the website locally, I use:
```
npx quartz build --serve --port 34621
```
The random port was chosen since the default one (8080) is probably in use by something else.

To build and push the website to GitHub, I use:
```
npx quartz sync
```

###### Shell commands 
I use the shell command plugin in order to run these commands straight from the obsidian editor. An interesting side effect of this is that command can be written as a markdown link. For example, here's a link to the build and push command as an obsidian URL [Build & Push](obsidian://shell-commands/?vault=content&execute=un0sfyl7nj) (Actually, this does nothing on the static website, so you'll have to believe me that it works).
Note that building with quartz actually temporarily deletes the `content` folder, so that will cause obsidian to crash. To overcome that you can set the vault in a folder above it. The location of the `content` is also customizable for both commands above using the `-d` flag.
###### Waypoint 
I use waypoint to automatically generate & update tables of contents for all of my folders.