require('./dom');

const { expect } = require('chai');
const { sinon, spy } = require('sinon');

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

global.mount = Enzyme.mount;
global.render = Enzyme.render;
global.shallow = Enzyme.shallow;