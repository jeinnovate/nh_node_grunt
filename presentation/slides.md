# Grunt
![Grunt](./images/grunt.svg)
## Jonathan A. Epstein
<a href="http://gruntjs.com/"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt"></a>

---

# What is it
## JavaScript Task Runner

---

# Why do I care
## Automation Rocks!
## The Grunt community is sweet!

---

### First Grunt example:
# NH Node Presentation!

---

# Some common tasks

- Improving code quality
- Optimizing assets
- Running code testing
- Continuous delivery automation
- Serving assets
- Automating development

---

# Under the covers
- It is Node running JS
- Open source
- Uses modules so it can be extended + customized

---

# Popular plugins
[http://gruntjs.com/plugins](http://gruntjs.com/plugins)

---

# Lab time
![Grunt](./images/lab.jpg)


---

# Lab part 1:
## Run tasks

Go to [basic-pre-grunt](./basic-pre-grunt) first as a baseline

Then head over to
[basic-post-grunt](./basic-post-grunt)

You can see all tasks and check your setup with

```
grunt --help
```

Run

```
grunt dev
```

```
grunt dev
```

---

# Lab part 2:
## Add a new task

Let's minify the css
[grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
I already added `cssmin` to the package.json

```

```

Add it to the task named `release` after `uglify`


If you are having problems:

- the final `GruntFile.js` is called [gruntFile.js.final](./gruntFile.js.final)