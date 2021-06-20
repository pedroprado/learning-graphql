# Project for learing graphQL


## When to use GraphQL

GraphQL comes to solve **Heavly nested data Http Routing**. This means that as more nested is the data, the hardest is to build **Restfull Routing** that maintains the **restfull conventions**

The more nested data is makes more difficult to:

* Build restfull routing
* Buildint restullf routing that keeps the restfull conventions leads to **to many http request** for fetching data
* Overfecthing data: restfull routes fetches all the data when, sometimes, all we need is a single attribute

## What is GraphQL

GraphQL builds **objects relationship** as a graph. So queries to the server is a lot easier do make (we just send the types and attributes we need).

### 1.RootQuerys

Allows the request to get in the applications data graph (this graph might be in database or, in case of a BFF, be constructed by acessing the backed servers).


### 2.Resolve Function

"Resolves" the differences from "json" and "type". This means, any key (foreign) is resolved as an object.

### 3.Circulatiry

GraphQL allows circular dependencia (bidirection graphs relationship). The only thing we need to do is to declare the **Fields** of our **Types** as **arrow function**.

### 4.Mutation

It is how GraphQL manipulates data (create/update/delete).