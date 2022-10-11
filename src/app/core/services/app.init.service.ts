
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONFIG_JSON, APP_SETTINGS } from '../settings';

@Injectable()
export class AppInitService {

    sampleArray: any;

    constructor(private httpClient: HttpClient) { }

    loadJson2() { // not to use, old code example
        return new Promise<void>((resolve, reject) => {
            console.log("AppInitService.init() called");
            ////do your initialisation stuff here
            fetch('./assets/sampleJsonArray.json').then(res => res.json())
                .then(jsonData => {
                    this.sampleArray = jsonData;
                });
            setTimeout(() => {
                console.log('AppInitService Finished');
                console.log(`sampleArray from API: `, this.sampleArray);
                resolve();
            }, 6000);
        });
    }

    loadJson(): Promise<any> {
        // return fetch('./assets/sampleJsonArray.json').then(res => res.json())
        return fetch('./assets/institutions.json').then(res => res.json())
        .then(jsonData => {
            this.sampleArray = jsonData; // to service local
            APP_CONFIG_JSON.samplyArray = jsonData; // to global
            // APP_CONFIG_JSON.samplyArray = jsonData.slice(); // populate 
            // APP_CONFIG_JSON.samplyArray =  Array.from(jsonData); // ES6
            console.log(`APP_CONFIG_JSON.samplyArray: `, APP_CONFIG_JSON.samplyArray);
        });
    }

    getSettings(): Promise<any> {
        console.log(`getSettings:: before http.get call`);

        const promise = this.httpClient.get('http://private-1ad25-initializeng.apiary-mock.com/settings')
            .toPromise()
            .then(settings => {
                console.log(`Settings from API: `, settings);

                APP_SETTINGS.connectionString = settings[0].value;
                APP_SETTINGS.defaultImageUrl = settings[1].value;

                console.log(`APP_SETTINGS: `, APP_SETTINGS);

                return settings;
            });

        return promise;
    }
}
