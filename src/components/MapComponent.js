import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Alert  } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline  } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyA0oCGHRGMxWPTr6XN9auQQWEIOrItY2Bc';


class MapComponent extends Component {
  state = {
    initialPosition: {
      latitude: 40.784497,
      longitude: 43.8406439,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
  }

  componentDidMount() {
    // RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    //   interval: 10000,
    //   fastInterval: 5000,
    // })
    //   .then((data) => {
    //     Geolocation.getCurrentPosition(
    //       info =>
    //         this.setState({initialPosition:  {latitude: info.coords.latitude, longitude: info.coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01}})
    //     );
    //   })
    //   .catch((err) => {
    //   });
  }

  render() {
    const origin = {latitude: 40.784497,
      longitude: 43.8406439};
    const destination = {latitude: 40.6931338,
      longitude: 43.7661731};
    return (
      <View>
        <MapView style={styles.map}
                 initialRegion={this.state.initialPosition}
                 provider={PROVIDER_GOOGLE}
        >
          <MapView.Marker
            coordinate={{latitude: 40.6931338,
              longitude: 43.7661731}}
            title={"Gyumri"}
            description={"description"}
            pinColor = {"gold"}
          />
          <MapViewDirections
            origin={origin}
            destination={destination}
            strokeWidth={3}
            strokeColor="black"
            apikey={GOOGLE_MAPS_APIKEY}
          />
          {/*<Polyline*/}
          {/*  coordinates={[*/}
          {/*    {latitude: 40.784497,*/}
          {/*      longitude: 43.8406439},*/}
          {/*    {latitude: 40.6931338,*/}
          {/*      longitude: 43.7661731},*/}
          {/*  ]}*/}
          {/*  strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider*/}
          {/*  strokeColors={[*/}
          {/*    '#7F0000',*/}
          {/*  ]}*/}
          {/*  strokeWidth={6}*/}
          {/*/>*/}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapComponent;
