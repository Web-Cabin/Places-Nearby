import React from 'react';

const PlacesCard = ({place}) => {
    return (
        <div className="item">
          <div className='heart'>&#9825;</div>
          <img src={place.photoUrl} width="350" height="200"></img>
          <span>
            <div className ='propertyType'>{place.propertyType} · {place.city}</div>
            <div className='description'>{place.title}</div>
            <div className='price'>${place.price}/night</div>
            <div id="wrapper">
              <div id='stars'>★★★★★</div>
              <div id='reviews'>{place.reviews}</div>
            </div>
          </span>
        </div>
    )
}
export default PlacesCard;