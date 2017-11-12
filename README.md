<h1><p align="center">:blue_book: hCard :blue_book:</p></h1>

[![Build Status](https://travis-ci.org/diegofss11/hcard-react.svg?branch=master)](https://travis-ci.org/diegofss11/hcard-react)

### Before you start

Make sure you have [Node.js](https://nodejs.org/en/) installed.

### Getting started
- `npm install`

- `npm run start` - starts the application locally

### Other commands...
```shell
$ npm build                     # Create dist folder with index and .js files
$ npm run test                  # Runs the unit tests
$ npm run tdd                   # Runs the unit tests with the flag `--watch` (useful for TDD)
$ npm run coverage              # Runs nyc to report the test coverage
```


### The output can be validated on this online validator as a fragment
http://hcard.geekhood.net/

- Example of output generated

```html
<div xmlns="http://www.w3.org/1999/xhtml" id="vcard" class="vcard">
  <div class="hcard-header">
    <div class="hcard-row">
      <span class="card-item-label hide">
      </span>
      <div class="fn">Diego Freitas</div>
    </div>
    <div class="avatar-wrapper">
      <img src="../../..//assets/imgs/avatar.png" alt="avatar" class="photo" />
    </div>
  </div>
  <div class="hcard-body">
    <div class="hcard-row">
      <span class="card-item-label ">Email</span>
      <a class="email" href="mailto: diegofss11@gmail.com">diegofss11@gmail.com</a></div>
    <div class="hcard-row"><span class="card-item-label ">Phone</span><span class="tel">041404040</span></div>
    <div class="adr">
      <div class="address-item">
        <div class="hcard-row"><span class="card-item-label ">Address</span><span class="street-address">1115 Sydney Street</span></div>
        <div class="hcard-row"><span class="card-item-label hide"></span><span class="locality">Coogee</span>, <span class="region">NSW</span></div>
      </div>
      <div class="row-groupped">
        <div class="hcard-row"><span class="card-item-label ">Postcode</span><span class="postal-code">2003</span></div>
        <div class="hcard-row"><span class="card-item-label ">Country</span><span class="country-name">Australia</span></div>
      </div>
    </div>
  </div>
</div>
```