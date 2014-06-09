<style type="text/css">
.reveal .slides p {
    text-align: left;
}
</style>
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
# This Presentation!

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

# Racer task 1:
## Get Node and Grunt setup


---

# Racer task 2:
## Get the racer project setup

Go to [basic-pre-grunt](./basic-pre-grunt) to see the project pre Grunt.

Then head over to [basic-post-grunt](./basic-post-grunt)

To pull down the npm dependencies

You can see all tasks and check your setup with

```
grunt --help
```

---

# Racer task 3:
## Run tasks

Run

```
grunt dev
```

```
grunt dev
```

---

# Racer task 4:
## Add a new task

1. Let's minify the css
[grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
I already added `cssmin` to the package.json

```javascript
cssmin: {
    options: {
        report: 'min'
    },
    css: {
        files: {
            '<%= distDir %>/main.css': '<%= distDir %>/main.css'
        }
    }
},
```

2. Now add it to `release` task

**If you are having problems:**

The final `GruntFile.js` is called [gruntFile.js.final](./gruntFile.js.final)

---

# Yeoman Mobile Generator task 1:
## Run some Grunt commands