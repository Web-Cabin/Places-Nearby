/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import PlacesCard from '../client/components/PlacesCard.jsx';

describe('Place Component', () => {
  const testingPlace = { "id" : 0, "photoUrl" : "https://nearby-recommendations.s3-us-west-1.amazonaws.com/0.jpg", "title" : "Dolor consectetur temporibus alias aut.", "city" : "Kurtmouth", "propertyType" : "aut dolore ut", "price" : 203, "reviews" : 123, "__v" : 0 }
  const wrapper = shallow(<PlacesCard place={testingPlace} renderList={() => {}} />);

  //Title 
  it('works', () => {
    expect(wrapper.exists()).toEqual(true)
  })
  //Property Type 
  it('should render the property type and city', () => {
    expect(wrapper.contains(<div className="entryDiv" />)).to.equal(true);
  }); 
  //Price
  it('should render the price', () => {
    expect(wrapper.find('Price').text()).toBe('$203/night');
  });
  //Reviews
  it('should render the total reviews', () => {
    expect(wrapper.find('Review').text().includes('123'));
  });
  //PhotoUrl 
  it('should render a picture', () => {
    expect(wrapper.find('Image').prop('src')).toBe('test.jpeg');
  });
});