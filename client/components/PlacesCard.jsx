import React from 'react';

const PlacesCard = ({place}) => {
    return (
        <div className="entryDiv">
          <img src={place.photoUrl} width="350" height="200"></img>
          <div>{place.propertyType} · {place.city}</div>
          <div>{place.title}</div>
          <div>${place.price}/night</div>
          <div>{place.reviews}</div>  
        </div>
    )
}

export default PlacesCard;