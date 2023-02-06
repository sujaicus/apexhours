public without sharing class ApexHoursDemo {
    
    public ApexHoursDemo() {

    }

    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactList(){
        try {
            return [Select Id , Name , Email from Contact Limit 20];

        } catch (Exception e) {
            
            throw new AuraHandledException(e.getMessage());
        }
    }

}