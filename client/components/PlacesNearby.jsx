import React, { Component } from 'react';
import styled from 'styled-components'; 


//Component CSS 
const Slider = styled.div`
    position: relative;
    width: 500px;
    margin: 0 auto;
    height: 500px;
    overflow: hidden;
    white-space: nowrap;
  `;

const SliderWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
  `; 

const Slides = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
  `;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
  `;

const NextArrow = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
    position: absolute;
    top: 50%;
    right: 25px;
    z-index: 999;
    color: #fff;
  `;
  
const BackArrow = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
    position: absolute;
    top: 50%;
    left: 25px;
    z-index: 999;
    color: #fff;
  `;
  
//   .fa-arrow-right:before, .fa-arrow-left:before {
//     color: #222
//   }
  
//REACT Component 
class PlacesNearby extends Component {
    constructor(props) {
      super(props)

      this.state = {
        //images: [`https://nearby-recommendations.s3-us-west-1.amazonaws.com/1.jpg`, `https://nearby-recommendations.s3-us-west-1.amazonaws.com/2.jpg`, `https://nearby-recommendations.s3-us-west-1.amazonaws.com/3.jpg`, `https://nearby-recommendations.s3-us-west-1.amazonaws.com/4.jpg`], 
        places: [],
        currentIndex: 0,
        translateValue: 0
      }
      this.goToNextSlide = this.goToNextSlide.bind(this)
      this.goToPrevSlide = this.goToPrevSlide.bind(this)
      this.slideWidth = this.slideWidth.bind(this);
    }
  
    goToPrevSlide() {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide() {
      if(this.state.currentIndex === this.props.places.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth() {
       return document.querySelector('.slide').clientWidth
    }
  
    render() {
      return (
        <div>
        <Slider>
          <SliderWrapper style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.props.places.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </SliderWrapper>
        </Slider>
  
        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
  
        <RightArrow goToNextSlide={this.goToNextSlide}
        />
        </div>
      );
    }
}
export default PlacesNearby 

  
  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image.photoUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <Slides className="slide" style={styles}></Slides>
  }
  
  
  const LeftArrow = (props) => {
    return (
      <BackArrow onClick={props.goToPrevSlide}>
        {/* <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i> */}
      </BackArrow>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <NextArrow onClick={props.goToNextSlide}>
        {/* </nextArrow><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i> */}
      </NextArrow>
    );
  }