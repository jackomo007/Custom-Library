import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from "./index";

configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<TextInput />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test
 *
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "input");
  expect(appComponent.length).toBe(1);
});