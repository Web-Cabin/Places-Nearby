import React from 'react';

const PlacesCard = ({place}) => {
    return (
        <div className="item">
          {/* //{} */}
          <img src={place.photoUrl} width="350" height="200"></img>
<<<<<<< HEAD
          <span>
            <div className ='propertyType'>{place.propertyType} · {place.city}</div>
            <div className='description'>{place.title}</div>
            <div className='price'>${place.price}/night</div>
            <div id="wrapper">
              <div id='stars'>★★★★★</div>
              <div id='reviews'>{place.reviews}</div>
            </div>
          </span>
=======
          <div className ='propertyType'>{place.propertyType} · {place.city}</div>
          <div className='description'>{place.title}</div>
          <div className='price'>${place.price}/night</div>
          <div className='reviews'>{place.reviews}</div>  
>>>>>>> f6d3f83e24a384281fb44343328d0ed79b5a36f3
        </div>
    )
}

export default PlacesCard;