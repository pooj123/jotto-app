import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    const wrapper = shallow(<Congrats {...props} />);
    return wrapper;
}

test('congrats renders div properly', () => {
    const wrapper = setup();
    const divTag = findByAttr(wrapper, "comp-congrats");
    expect(divTag.length).toBe(1);
});
test('renders no text when success prop is false', () => {
    const wrapper = setup({success: false});
    const component = findByAttr(wrapper, "comp-congrats");
    expect(component.text()).toBe("");
});
test('renders success msg when success prop is true', () => {
    const wrapper = setup({success: true});
    const component = findByAttr(wrapper, "congrats-msg");
    expect(component.text()).not.toBe("");
});