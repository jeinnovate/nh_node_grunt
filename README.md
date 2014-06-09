[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
New Hampshire Node - Grunt Presentation
=======================================

Intro
-----

This presentation contains 3 examples of projects using Grunt. They are listed in order of complexity:

- [Grunt Presentation](./presentation) - The current presentation made with [reveal-ck](https://github.com/jedcn/reveal-ck) and Grunt.
- [Racer Post Grunt](./racer-post-grunt) - [Javascript Racer](https://github.com/jakesgordon/javascript-racer) converted to use Grunt.
The original (minus sound) lives in [Racer Pre Grunt](./racer-pre-grunt)
- [mobile-example](./mobile-example) - A example application using Grunt made from the [Yeoman Mobile Generator](https://github.com/yeoman/generator-mobile).

More details about each project can be found in the `README.md` in each directory

Requirements
------------
- `Node > 0.10.20`

You can check with `node --version`
If you do not have node, you can install it with `nvm` by running

```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh

# open a new shell
nvm install 0.10
nvm use 0.10
nvm alias default 0.10

# check with
`node --version`
```

Post Node setup
---------------
1. Install npm global dependencies with `npm install -g grunt-cli`