import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Ol from 'openlayers';
// import * as Gp from 'geoportal-extensions-openlayers';

import {Services, olExtended as Ol} from 'geoportal-extensions-openlayers';

import '../node_modules/geoportal-extensions-openlayers/dist/GpPluginOpenLayers.css';
import '../node_modules/openlayers/dist/ol.css';

class App extends Component {
    render() {

          var createMap = function() {
              var map = new Ol.Map({
                  target : "map",
                  layers : [
                      new Ol.layer.GeoportalWMTS({
                          layer : "GEOGRAPHICALGRIDSYSTEMS.MAPS"
                      })
                  ],
                  view : new Ol.View({
                      center : [288074.8449901076, 6247982.515792289],
                      zoom : 8
                  })
              });
              var mouse = new Ol.control.GeoportalMousePosition();
              map.addControl(mouse);
          }

          Services.getConfig({
              apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
              timeOut : 20000,
              onSuccess : createMap
          });

        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div id="map"></div>

            </div>
        );
    }
}

export default App;
