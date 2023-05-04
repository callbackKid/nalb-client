import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

import { API_KEY } from '../../../api_key';

const noanimalleft: google.maps.LatLngLiteral = { lat: 55.66321206974529, lng: 37.7167484164238 };

const containerStyle = {
  height: '500px'
}

export default function Map() {
  const [start, setStart] = useState<google.maps.LatLngLiteral>()
  const [travelMode, setTravelMode] = useState<google.maps.TravelMode | null>(null)
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(null)

  const directionsCallback = (result: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
    if (result !== null) {
      if (status === 'OK') {
        setResponse(result)
      } else {
        console.log('response: ', response)
      }
    }
  }


  return (
	<div>
    <LoadScript
        googleMapsApiKey = {API_KEY}
      >
        <GoogleMap
          mapContainerStyle = {containerStyle}
          center={noanimalleft}
          zoom={15}
          onClick = {(event) => setStart({lat: event.latLng!.lat(), lng: event.latLng!.lng()})}
        >
          <Marker position = {noanimalleft}/>

          {
              start && (
                <>
                  <Marker position = {start}/>
                  { !response &&
                    <DirectionsService
                      options={{
                        destination: noanimalleft,
                        origin: start,
                        travelMode: google.maps.TravelMode.WALKING
                      }}
                      callback={(result, status) => directionsCallback(result, status)}
                    />
                  }
                </>

              )
            }

            {
              response && (
                <DirectionsRenderer
                  options={{ 
                    directions: response
                  }}
                />
              )
            }

        </GoogleMap>
      </LoadScript>
  </div>
  )
}
