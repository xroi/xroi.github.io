---
draft: "True"
---
This note has some GitHub tips I should remember for future projects.

###### Picking a License
Use https://choosealicense.com/. This website explains in simple language what are the permissions, conditions, and limitations of each license, and also has a handy button to automatically generate a pull request for the creation of the license. It's handy if the license wasn't picked at the generation of the project.

###### Creating a Python Dependency List
Run the following line to automatically generate a list of all installed python packages and output it to `requirements.txt`:
```
pip freeze > requirements.txt
```
Note that this outputs every single python package on the environment, therefore it should only be used if you are using a virtual environment specialized for the project.
