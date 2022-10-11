import React from "react";
import { MainLayerMap } from './map/main-layer/MainLayerMap';
import { Layers } from './map/layers/Layers';
import { TileLayer } from './map/layers/TileLayer';
import { IconVectorLayer } from './map/layers/IconVectorLayer';
import { MainMenu } from "./main-menu/MainMenu";

export const InitialPage = () => (
    <div className="initial-page">
        <MainLayerMap style={{ height: window.innerHeight}}>
          <Layers>
            <TileLayer/>
            <IconVectorLayer />
          </Layers>
        </MainLayerMap>
        <MainMenu />
    </div>
    )