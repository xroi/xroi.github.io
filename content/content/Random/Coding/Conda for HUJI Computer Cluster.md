This is a short tutorial on how to set up a Conda environment and manage it on the HUJI computer cluster.
## Initial Setup:
These four commands download the latest 64-bit version of the Linux installer of miniconda in the user repository, rename it to a shorter file name, silently install, and then delete the installer. Ideally it's better to replace to path with one in a lab folder since personal storage is very limited. 
```sh
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

Finally, run the following which updates `.zsrch` and adds conda to `PATH`:
```sh
~/miniconda3/bin/conda init zsh
```
And restart the shell (`exec zsh`). 
## Managing Environments:
For full documentation see https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html.


Create an environment:
```sh
conda create -n <env_name> python=<python_version>

OR

# for custom path
conda create -p <path/to/envname> python=<python_version>
conda config --append envs_dirs <path/to>

```

Delete an environment:
```sh
conda remove -n <env_name> --all
```

List environments:
```sh
conda info --envs
```

Activate an environment (this is a prerequisite to all following commands):
```sh
conda activate <env_name>
```

Deactivate an environment:
```
conda deactivate
```

List packages in environment:
```sh
conda list
```

Install package:
```sh 
conda install <package_name>

OR

pip install <package_name>
```


Running python:
```sh
python <file_path.py>
```

Share an environment:
1. Export:
```sh
conda env export > environment.yml
```

2. Import: 
```sh
conda env create -f environment.yml
```


## Misc:
- For running Jupyter notebooks remotely with the kernel being a conda environment, activate the conda environment and run `conda install ipykernel` before creating the kernel. Other instruction for setting up IDE remote development are [here](https://wiki.cs.huji.ac.il/en/wiki/Running_Code_Remotely). (In my experience VS code is easier to set up than PyCharm).
	- Note: Some VS code extensions need to be installed remotely (Jupyter, Python, PyLance)
	- Note: do not include large dataset folders or parent dataset within the remote VS code workspace or PyLance will crash. 