import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import App from '../client/components/app.jsx';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Place Component', () => {
  const testPlaceList = [
    {
      "_id" : "5d643a63646c8a700c8e1a54", 
      "id" : 28, 
      "photoUrl" : "https://nearby-recommendations.s3-us-west-1.amazonaws.com/28.jpg", 
      "title" : "Iusto veniam sed laborum ab corporis esse.", 
      "city" : "Mertzstad", 
      "propertyType" : "et reiciendis sed", 
      "price" : 169, 
      "reviews" : 119,
       "__v" : 0 
    },
    { 
      "_id" : "5d643a63646c8a700c8e1a50", 
      "id" : 24, 
      "photoUrl" : "https://nearby-recommendations.s3-us-west-1.amazonaws.com/24.jpg", 
      "title" : "Doloribus quidem consectetur animi.", 
      "city" : "Raulburgh", 
      "propertyType" : "velit quis beatae", 
      "price" : 238, 
      "reviews" : 273, 
      "__v" : 0 
    },
    { 
      "_id" : "5d643a63646c8a700c8e1a45", 
      "id" : 13,
      "photoUrl" : "https://nearby-recommendations.s3-us-west-1.amazonaws.com/13.jpg", 
      "title" : "Dicta saepe quae sit minus quae culpa est.", 
      "city" : "Kaceymouth", 
      "propertyType" : "ut enim asperiores", 
      "price" : 238, 
      "reviews" : 246, 
      "__v" : 0 
    }
  ];
  const wrapper = shallow(
    <App places={testPlaceList} />,
  );
  
  it('should render 3 places', () => {
    expect(wrapper.children().length).toBe(3);
  });

  it('should render the Place component', () => {
    expect(wrapper.find('Place').exists());
  });

  it('should have correct initial states', () => {
    expect(wrapper.state()).toEqual({ currentIndex: 0, places: [], translateValue: 0});
  });

  it('should change index on click', () => {
    wrapper.find('fadedright').simulate('click');
    expect(wrapper.state('finish')).toEqual(4);
    wrapper.find('fadedleft').simulate('click');
    expect(wrapper.state('finish')).toEqual(3);
  });

});
