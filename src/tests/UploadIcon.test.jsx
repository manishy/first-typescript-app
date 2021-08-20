import React from 'react';
import UploadIcon from '../components/uploadIcon/UploadIcon';

describe.only('dynamicFormPortal > icons > UploadIcon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UploadIcon />);
  });

  test('should render expected elements', () => {
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  test('should have className as UploadIcon', () => {
    expect(wrapper.find('svg').props().className).toEqual('upload-icon');
  });
});
