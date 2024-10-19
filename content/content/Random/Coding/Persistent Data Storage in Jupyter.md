According to google:
"Jupyter Notebooks are used **to create interactive notebook documents that can contain live code, equations, visualizations, media and other computational outputs**. Jupyter Notebooks are often used by programmers, data scientists and students to document and demonstrate coding workflows or simply experiment with code." I personally mostly use Jupyter with python (one of three core programming languages supported by Jupyter, making it's name, which are [Julia](https://en.wikipedia.org/wiki/Julia_(programming_language) "Julia (programming language)"), [Python](https://en.wikipedia.org/wiki/Python_(programming_language) "Python (programming language)") and [R](https://en.wikipedia.org/wiki/R_(programming_language) "R (programming language)")). In my opinion one of the great strengths of Jupyter is the ability to part code into blocks. In addition, global variables in each block of code are persistent between them. This makes Jupyter super useful for data science tasks. 

For example, if there is some pre-processing task followed by a statistical analysis task, the two can be divided into two code blocks, one for each task. At the end of the pre-processing block, save a global variable `preprocessed_data` which will be used at the start of the analysis block. Now, say we want to change a parameter in the statistical analysis, we can simply change it and run the second block without running the pre-processing block again which can be a really convenient time saver, without the hassle of python serialization (e.g. w/ [pickle](https://docs.python.org/3/library/pickle.html)). 

Sometimes the intermediate data is too large to be kept in RAM, at which case it cannot be saved as a global variable and some manual serialization is a necessity for convenience. If the data is in column format (e.g. CSV), some tips are: 
1. Use [Parquet](https://en.wikipedia.org/wiki/Apache_Parquet) files. Parquet is an open source, column-oriented data file format designed for efficient data storage and retrieval. Can decrease storage especially if the data has columns with repeating values. 
2. Use [Polars](https://docs.pola.rs/) as the data loading package (e.g. instead of pandas). Polars allows you to _scan_ an input. Scanning delays the actual parsing of the file and instead returns a lazy computation holder called a `LazyFrame`. This prevents the need to hold the entire file in RAM.

Note that serialization allows the intermediate data to persist even if the Jupyter kernel is shut down. This is a great side effect which does not happen when using the global variable approach. In the case where the intermediate data is small enough to be kept in RAM (so we can use a global variable), and yet, we still want the data to persist when the kernel is shut down, (For example, in the case of a very computationally heavy pre-processing task resulting in a small amount of intermediate data), [dill](https://github.com/uqfoundation/dill) provides a very simple solution, which applies to any data type (column oriented or otherwise). `dill` is a python package which extends Python's `pickle` module for serializing and de-serializing Python objects, and importantly provides the ability to save the state of an interpreter session in a single command. So for example one can add the following two blocks to the notebook:

```python
# save a Notebook session
import dill
dill.dump_session('notebook_env.dill')
```

```python
# restore a Notebook session
import dill
dill.load_session('notebook_env.dill')
```


## Summary

---
**Global Variable Approach:**

- Pros:
	- Super easy to set up
	- General for all data types
- Cons:
	- Not viable for data larger than RAM
	- Not persistent between sessions

---
**Classic Serialization Approach:**

- Pros:
	- Persistent between sessions
	- Viable for data larger than RAM
- Cons:
	- Harder set up, can be data format dependent

---
**Dill Approach:**

- Pros:
	- Easy to set up
	- General for all data types
- Cons:
	- Not viable for data larger than RAM

---