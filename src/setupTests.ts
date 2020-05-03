// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// @ts-ignore
import { configure, shallow, render, mount } from 'enzyme';
// @ts-ignore
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



// Make Enzyme functions available in all test files without importing
// @ts-ignore
global.shallow = shallow;
// @ts-ignore
global.mount = mount;
// @ts-ignore
global.render = render;

// Fail tests on any warning
// console.error = message => {
//    throw new Error(message);
// };

module.exports = { mount };
