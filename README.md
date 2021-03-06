# Ember-baseline

I love Ember and I love the skel-baseline framework built by [n33](https://github.com/n33)
So I thought I would create a repo with an ember app with [skel-baseline](https://github.com/n33/skel-baseline) already built into it

I came acros a few problems implemenintng *skel-baseline* into *Ember* first of all, I use grunt to compile *baselines* sass files.
the install skel-baseline package breaks the Ember javascript so I installed jquery and wraped the contents of `bower_components/baseline/assets/js/main.js` in a `$(document).ready(function(){ ... contents of main here ... });`

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Run grunt in a new tab
* `sudo grunt`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

