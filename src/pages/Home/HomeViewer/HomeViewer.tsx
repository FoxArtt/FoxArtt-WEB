import React, {Component} from 'react';
import './HomeViewer.scss';
import {isBrowser, isMobileOnly} from 'react-device-detect';
import BrowserView from "./Views/BrowserView/BrowserView";
import TabletView from "./Views/TabletView/TabletView";
import MobileView from "./Views/MobileView/MobileView";

type props = {};
type state = {};

class HomeViewer extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            isBrowser ? <BrowserView/> : isMobileOnly ? <MobileView/> : <TabletView/>
        );
    }
}

export default HomeViewer;
