import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";

const GOOGLE_MAPS_APIKEY = "AIzaSyDk1DobgwiWprv16-UPBjhAjusgAwGk-5w";


class MapComponent extends Component {
  state = {
    initialPosition: {
      latitude: 40.784497,
      longitude: 43.8406439,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    markers: [
      {
        id: 1,
        title: "location",
        latitude: 40.784497,
        longitude: 43.8406439,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      {
        id: 2,
        title: "hello",
        latitude: 40.7805887,
        longitude: 43.8460687,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }],
    region: {
      latitude: 10,
      longitude: 10,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    },
    marginBottom: 1
  };

  componentDidMount() {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
        Geolocation.getCurrentPosition(
          info =>
            console.log()
        );

      })
      .catch((err) => {
      });
    console.log(this.state);
  }

  getLocation() {
    let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=location=";
    let location = "40.784497,43.8406439";
    let key = `&key=${GOOGLE_MAPS_APIKEY}`;

    return `${url}${location}${key}`;
  }

  _handlePress() {
    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.data}&key=AIzaSyDk1DobgwiWprv16-UPBjhAjusgAwGk-5w`)
      .then(res => {
        console.log(res.data.results[0]);
        // this.setState()
        this.setState({
          region: {
            latitude: res.data.results[0].geometry.location.lat,
            longitude: res.data.results[0].geometry.location.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
        })
        console.log(this.state.region);
        // this.setState({ persons });
        // axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=location=${res.data.results[0].geometry.location.lat},${res.data.results[0].geometry.location.lng}&radius=10000&key=AIzaSyDk1DobgwiWprv16-UPBjhAjusgAwGk-5w`)
        //   .then(data => {
        //     console.log(data);
        //     this.setState({ persons });
        //   })
      });
  }
  onRegionChangeComplete(region) {
    console.log(region);
    if(region.latitude.toFixed(6) === this.state.region.latitude.toFixed(6)
      && region.longitude.toFixed(6) === this.state.region.longitude.toFixed(6)){
      return;
    }
    console.log(region);
    this.setState({region});
    console.log(this.state);
  }

  render() {
    const origin = {
      latitude: 40.784497,
      longitude: 43.8406439,
    };
    const destination = {
      latitude: 40.7805887,
      longitude: 43.8460687,
    };
    return (
      <View>
        <MapView style={[styles.map, {marginBottom: this.state.marginBottom}]}
                 initialRegion={this.state.initialPosition}
                 provider={PROVIDER_GOOGLE}
                 showsUserLocation={true}
                 onMapReady={() => {this.setState({marginBottom: 0})}}
                 onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}

        >
          <MapView.Marker
            coordinate={{
              latitude: 40.784497,
              longitude: 43.8406439,
            }}
            title={"Gyumri"}
            description={"description"}
          />
          {/*<MapView.Marker*/}
          {/*  coordinate={{*/}
          {/*    latitude: 40.7805887,*/}
          {/*    longitude: 43.8460687,*/}
          {/*  }}*/}
          {/*  title={"Gyumri"}*/}
          {/*  description={"description"}*/}
          {/*/>*/}
          <MapView.Marker
            coordinate={{ "latitude": this.state.region.latitude,
              "longitude": this.state.region.longitude }}
            title={"Your Location"}
            draggable />
          <MapViewDirections
            origin={origin}
            destination={{ "latitude": this.state.region.latitude,
              "longitude": this.state.region.longitude }}
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
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginTop: 10,
          }}
          onChangeText={data => this.setState({ data })}
        />
        <Button
          onPress={() => this._handlePress()}
          title="Learn More"
          color="#841584"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginTop: 30,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: 400,
  },
});

export default MapComponent;
