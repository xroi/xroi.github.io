Look at the following piece of python code:

```python
def surprise(my_list = []):
	print(my_list)
	my_list.append('x')
surprise() 
surprise()
```

What does it print? On first glance, and if you are unfamiliar with the python concept, you might think it would be:

```
[]
[]
```

However, the actual output is:

```
[]
[x]
```

Why? The key point here is that the default argument `[]` is evaluated only once, when the function is defined, not each time the function is called. This means that the one same list object is used for all calls to `surprise()` where no argument is provided.

How come this behaviour is desired? well for the most part it doesn't matter - when the type of the default argument is immutable. For example, look at the following code:

```python
def surprise_int(my_int = 123):
	print(my_int)
	my_int += 3
surprise_int() 
surprise_int()
```

This code will print:

```
123
123
```

Why? because integers are immutable, therefore the line my_int += 3 isn't adding 3 to the reference of the default argument, instead it's creating an entirely new reference, leaving the default argument unchanged, leaving it the way it was evaluated.

Which types are immutable in python? Some examples are Integers, Floating Points, Strings, Tuples, Booleans and Frozensets. This list is finite (However new immutable types can be defined through named tuples or frozen dataclasses). 