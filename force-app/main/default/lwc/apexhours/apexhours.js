import { api, LightningElement,track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ApexHoursDemo.getContactList';

export default class Apexhours extends LightningElement {

    @track likeState=false;
    clickedButtonLabel;
    @api message="this is a simple message";
    greeting = 'World of pain';
    result;
    error;


    @wire(getContactList)
    getContactList ({error, data}) {
        if (error) {
            this.error=error;
            this.result=undefined;
            window.console.log("error", error);
        } else if (data) {
            this.result=data;
            this.error=undefined;
            window.console.log("contact records", data);
        }
    }




    changeHandler(event) {
      this.greeting = event.target.value;
    }

    handleClick(){
        this.clickedButtonLabel=event.target.label;
        window.console.log("Event Target " +event.target.label);
    }

    handleLikeButtonClick(){
        this.likeState = !this.likeState;
        window.alert(this.likeState);
    }

 
}