import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
  greeting = 'World of hewllo';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}