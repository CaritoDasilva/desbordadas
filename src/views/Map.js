import React, { useRef, useEffect, useState } from "react";
import styles from './Map.module.scss';
import mapboxgl from 'mapbox-gl';
import Map, { Marker } from 'react-map-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
const MapDespordadas = () => {

    return (
        <div className={styles.map_container}>
            <Map
              initialViewState={{
                longitude: -73.23284768979198,
                latitude: -39.81198422507795,
                zoom: 10
            }}
            // maxTileCacheSize={1024}
            mapboxAccessToken=""
            style={{ width: 700 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker longitude={-73.23284768979198} latitude={-39.81198422507795} />
            </Map>
        </div>
    )
}

export default MapDespordadas;