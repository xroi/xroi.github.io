A potential future project I am thinking about is a linear programming optimization solver written in rust. This project will function as both a way for me to learn about rust, existing linear programming algorithms, and the use cases of this type of problem.

### Resources
[Wikipedia - Linear programming](https://en.wikipedia.org/wiki/Linear_programming)
[Wikipedia - Integer programming](https://en.wikipedia.org/wiki/Integer_programming)

### Planned algorithms
#### Linear programming
##### Basis exchange algorithms
-  Simplex algorithm of Dantzig
-  Criss-cross algorithm
##### Interior point
 - Ellipsoid algorithm, following Khachiyan
 - Projective algorithm of Karmarkar
 - Vaidya's 87 algorithm
 - Vaidya's 89 algorithm
 - Input sparsity time algorithms
 - Current matrix multiplication time algorithm
#### Integer linear programming
- Relaxation of the matching LP problem
- Total unimodularity
##### Exact algorithms
- [cutting plane methods](https://en.wikipedia.org/wiki/Cutting-plane_method "Cutting-plane method")
- [branch and cut](https://en.wikipedia.org/wiki/Branch_and_cut "Branch and cut")
##### Exact algorithms for a small number of variables
- many, see wikipedia.
##### Heuristic methods
- [Hill climbing](https://en.wikipedia.org/wiki/Hill_climbing "Hill climbing")
- [Simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing "Simulated annealing")
- Reactive search optimization
- [Ant colony optimization](https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms "Ant colony optimization algorithms")
- [Hopfield neural networks](https://en.wikipedia.org/wiki/Hopfield_network "Hopfield network")

#### Sparse integer programming
If the matrix that defines the integer program is sparse some improvements can be made.


## General plan
- Learn basic rust.
- Look up best practices of making a rust library.
- Learn by practice - old code can always be improved. Make sure that it is modular.
- Follow these [guidelines](https://rust-lang.github.io/api-guidelines/checklist.html).