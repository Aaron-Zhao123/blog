## Convex Optimization

#### First talk: Cvxpy
###### How to solve a convex problem
* use a third-party solver, LP,QP and etc
* write your own solver
* use a convex modelling language to do both
  - disciplined convex programming
  - variables, constants and parameters, curvature, monotonicity, sign
  - One rule

##### One rule of DCP
If h(f1(x), ..., fk(x)) is convex where h is convex and for each i:
 * h is increasing in argument i, and fi is convex
 * h is decreasing in argument i, and fi is concave
 * f is affine

##### Applications
* If asked curverture of a value, it returns whether "convex", "concave" or "affine"
* define a cost and constraint to a problem

##### Syntax
* Parameters:
 - symbolic representations of constants
 - can specify sign
 - change value of constant without re-parsing (change gamma.value, then call solve)
 - Easy to use multiprocessing and etc
* Warm-start:
 - problem object caches solver solution and factorization
 - solution used as initial guess
 - factorization might be reused
* '\+' for problems:
 - objectives added (if both minimize or maximize)
 - constraint list added
* Splitting a problem
 - list_of_probs = split(prob)
 - distributed optimizations
* supports parallel solving

##### Multicriterion optimizations
* Definition: multiple competing optimization targets, gets Pareto optimal points
