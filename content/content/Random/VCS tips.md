---
draft: "False"
---
This note has some useful Version Control System (VCS) tips.

###### Picking a license
Use https://choosealicense.com/. 
This website explains in simple language what are the permissions, conditions, and limitations of each license, and also has a handy button to automatically generate a pull request for the creation of the license. It's handy if the license wasn't picked at the generation of the project.

###### Generating a python dependency list
Run the following line to automatically generate a list of all installed python packages and output it into `requirements.txt`:
```
pip freeze > requirements.txt
```
Note that this outputs every single python package on the environment, therefore it should only be used if you are using a virtual environment specialized for the project.

###### Generating a gitignore file
Use https://www.toptal.com/developers/gitignore. 
The purpose of `.gitignore` files is to ensure that certain files not tracked by Git remain untracked.  This website allows the automatic generation of `.gitignore` files, through specification of Operating Systems, IDEs and Programming languages. Command line usage and some editor extensions are also available, see [docs](https://docs.gitignore.io/).