import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HotelMap = (props) => {
    return (
        <div className='map-area'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyD3nwgifx5bhHhwIEGuA3V2E74m_8Gfd_E" }}
                defaultCenter={props.center}
                defaultZoom={8}
            >

                <AnyReactComponent
                    lat={props.center.lat}
                    lng={props.center.lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default HotelMap;