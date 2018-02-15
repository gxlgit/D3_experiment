# [D3](https://d3js.org/) Experiment 
## by Gwen Latasa

I decided to teach myself D3 after learning about it in a GA class.  
In this climate where data is becoming big business, it seems essential to learn how to use these
libraries to effectively and quickly convey data and correlations to clients.

## Why D3?

Using D3 will come naturally to Javascript coders because it follows a similar pattern of DOM manipulation. 
The code can allow for real time creation of data visualizations, without having to statically create and upload them to our websites.  But the real advantage here is that it simplifies & shortens the code that you have to write, making it
very easy to dynamically manipulate the DOM based on the data set.  There are other easier to use visualization libraries, but once mastered D3 can give you a high degree of customization.  That being said, it seems like it would take a while to really get all the in's and out's of D3 because there are a lot of little things to learn in terms of how best to setup code, and how to manipulate the nodes you are creating.  In the meantime, there are a lot of tutorials out there on how to acheive specific sorts of visualizations, and I imagine that it's very common to follow these how-to's closely with a tweaks for one's specific dataset.

## Resources
[D3 tutorials](https://github.com/d3/d3/wiki/Tutorials)
[D3 Beginner's Guide](https://website.education.wisc.edu/~swu28/d3t/concept.html)

## Things to know about D3
* Lightweight
* Can handle large data sets
* Because we are creating the charts in the DOM, we can inspect the elements for troubleshooting
* D3 does not store data within variables. Instead, D3 stores data within the DOM selectors
* Beware: many tutorials use an older version of D3 and functions have been changed in v4 ( i.e. scale.linear() has been changed to .scaleLinear() )

## How To Use D3
* To use D3 you can either include this script tag <script src="https://d3js.org/d3.v4.min.js"></script>
  or you can locally install it on your computer and import it into you .js 

## Terms to Know
* [Scalable Vector Graphics](https://www.w3.org/Graphics/SVG/)
SVG is a markup language for describing two-dimensional graphics applications and images, and a set of related graphics script interfaces.
