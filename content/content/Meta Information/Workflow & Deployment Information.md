This note holds general information regarding my workflow and they way I publish content in this website. 
###### Tools Used
* Obsidian
* Obsidian Plugins:
	* Shell Commands
	* Waypoint
	* Hard breaks
	* File Color
	* Consistent Attachments and Links
	* Attachment Management
* Quartz 4.0
* GitHub Pages
* WebStorm

###### Some useful links
* [Quartz Documentation](https://quartz.jzhao.xyz/)
* [Quartz GitHub Repository](https://github.com/jackyzha0/quartz)
* [This Website's GitHub Repository](https://github.com/xroi/xroi.github.io)
* ["Shell Commands" Obsidian Plugin Documentation](https://publish.obsidian.md/shellcommands/Index)

###### Workflow
I cloned the quartz repository and placed the obsidian vault inside the `content` folder.
For most technical and general website configuration operations I use WebStorm. For content manipulation, I use obsidian. This system allows to me to only be in contact with local markdown files in an isolated environment 99% of the time, while making deployment easy. 

To build and host the website locally, I use:
```
npx quartz build --serve --port <port>
```

To build and push the website to GitHub, I use:
```
npx quartz sync
```

###### Shell commands 
I use the shell command plugin in order to run these commands straight from the obsidian editor. An interesting side effect of this is that command can be written as a markdown link. For example, here's a link to the build and push command as an obsidian URL [Build & Push](obsidian://shell-commands/?vault=content&execute=un0sfyl7nj) (this does nothing on the static website, so you'll have to believe me that it works).
Note that building with quartz actually temporarily deletes the `content` folder, so if you set it as the vault that will cause obsidian to crash. To overcome that you can set the vault in a folder above it. The location of the `content` is also customizable for both commands above using the `-d` flag.
###### Waypoint 
I use waypoint to automatically generate & update tables of contents for all of my folders. Usage: 
```
‎ %% Waypoint %%
```

###### WikiLinks vs Markdown links
I decided to disable the default usage of WikiLinks in Obsidian, as it led to some link resolution problems with Quartz. This choice is also available in Waypoint. In addition, It’s what the markdown standard defines a link should look like, and it’s what’s supported on most apps, scripts and services. It’s also more future-proof.

###### Git Configuration
It's useful to make git locally treat filenames as case-sensitive. This is due to the fact that changing a markdown file name updates links to it, but this change is not reflected in the new URL due to git not noticing the change. The command for this is:
```
git config core.ignorecase false
```
I also use a git submodule further discussed in the following section.

###### Handling Private Notes
It is more comfortable for me to have a single obsidian vault with a separate private note directory rather than having to mark each note as private individually. I also wished to back them up separately on a private git repository. The way obsidian vaults work, symlinks are dangerous, therefore I decided to add a git submodule inside the contents folder, which would be ignored by the main website repo. 

###### Attachment management
When adding images to my notes I typically just copy and paste them. On default, obsidian just places the image file in the same folder as the note, with a non helpful name. Towards fixing this I use 2 plugins: `Attachment Management` Which allows attachment to be automatically renamed with some parameters, for example the date or the file name. `Consistent Attachments and Links` which allows moving attachments with files (and fixing wikilink paths) automatically. So for each folder where the notes inside have image attachments, there's a nested `Attachments` folder. When I paste an image into a note, it goes into `<note path>/Attachments/<note name>`. 