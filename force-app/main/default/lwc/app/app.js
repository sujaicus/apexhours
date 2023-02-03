import { LightningElement } from 'lwc';

export default class App extends LightningElement {
name="Electra X4";
description=" this is a cool EV brike";
category="EV";
material="aluminium";
price="$2500";
pictureUrl="https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg";
display=true;

/*
connectedCallback() {
    setTimeout(() => {
        this.ready = true;
    }, 3000);
} 
*/
}