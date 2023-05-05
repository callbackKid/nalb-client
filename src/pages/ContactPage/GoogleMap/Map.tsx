import { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

import { API_KEY } from '../../../api_key';
import Card from '../../../components/Card/Card';


export default function Map() {
  const [start, setStart] = useState<google.maps.LatLngLiteral>()
  const [travelType, setTravelType] = useState<google.maps.TravelMode | string>('TRANSIT')
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(null)
  const noanimalleft: google.maps.LatLngLiteral = { lat: 55.66321206974529, lng: 37.7167484164238 };

  const transitRef = useRef<HTMLDivElement | null>(null)
  const walkingRef = useRef<HTMLDivElement | null>(null)
  const drivingRef = useRef<HTMLDivElement | null>(null)

  const containerStyle = {
    height: '500px'
  }

  useEffect(() => {
    setResponse(null)
  }, [travelType, start])


  const changeTravelMode = (mode: google.maps.TravelMode) => {
    setTravelType(mode)

    // пока не удаляю
    //console.log(event.currentTarget); event: React.MouseEvent<HTMLElement>

    switch (mode) {
      case google.maps.TravelMode.WALKING:
        transitRef.current?.classList.remove('isSelected')
        drivingRef.current?.classList.remove('isSelected')
        walkingRef.current?.classList.add('isSelected')
        break
      case google.maps.TravelMode.DRIVING:
        transitRef.current?.classList.remove('isSelected')
        drivingRef.current?.classList.add('isSelected')
        walkingRef.current?.classList.remove('isSelected')
        break
      case google.maps.TravelMode.TRANSIT:
        transitRef.current?.classList.add('isSelected')
        drivingRef.current?.classList.remove('isSelected')
        walkingRef.current?.classList.remove('isSelected')
        break
      default:
        console.log('Wrong travel mode')
    }
  }

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
                        travelMode: travelType as google.maps.TravelMode
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

      <div className = 'cards-container'>
        <div className = 'card-wrapper'>
          {
          (response && travelType === google.maps.TravelMode.TRANSIT)
          ?
            <div className = 'route-description'>
              <p>{response.routes[0].legs[0].distance?.text}
                <span>{response.routes[0].legs[0].duration?.text}</span>
              </p>
            </div>
          : <div className = 'route-description'></div>
          }
          <div 
            onClick = {() => changeTravelMode(google.maps.TravelMode.TRANSIT)} 
            className = 'card-hover isSelected'
            ref = {transitRef}
          >
            <Card 
              img = '/transport.svg' 
              text = 'Общественным транспортом' 
              description = 'TRANSIT' 
        
            />
          </div>
        </div>

        <div className = 'card-wrapper'>
          {
          (response && travelType === google.maps.TravelMode.DRIVING)
          ?
            <div className = 'route-description'>
              <p>{response.routes[0].legs[0].distance?.text}
                <span>{response.routes[0].legs[0].duration?.text}</span>
              </p>
            </div>
          : <div className = 'route-description'></div>
          }
          <div 
            onClick = {() => changeTravelMode(google.maps.TravelMode.DRIVING)} 
            className = 'card-hover'
            ref = {drivingRef}
          >
            <Card 
              img = '/car.svg' 
              text = 'На машине' 
              description = 'DRIVING' 
            />
          </div>
        </div>
        
        <div className = 'card-wrapper'>
          {
          (response && travelType === google.maps.TravelMode.WALKING) 
          ?
            <div className = 'route-description'>
              <p>{response.routes[0].legs[0].distance?.text}
                <span>{response.routes[0].legs[0].duration?.text}</span>
              </p>
            </div>
          : <div className = 'route-description'></div>
          }

          <div 
            onClick = {() => changeTravelMode(google.maps.TravelMode.WALKING)} 
            className = 'card-hover'
            ref = {walkingRef}
          >
            <Card 
              img = '/foot.svg' 
              text = 'Пешком' 
              description = 'WALKING' 
            />
          </div>
        </div>
      </div>
  </div>
  )
}
