import React from 'react';

const PlacesCard = ({place}) => {
    return (
        <div className="entryDiv">
          <img src={place.photoUrl} width="350" height="200"></img>
          <div className ='propertyType'>{place.propertyType} · {place.city}</div>
          <div className='description'>{place.title}</div>
          <div className='price'>${place.price}/night</div>
          <div className='reviews'>{place.reviews}</div>  
        </div>
    )
}

export default PlacesCard;