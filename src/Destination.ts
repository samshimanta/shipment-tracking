import { faker } from '@faker-js/faker';

export class Destination {
    receiver : string;
    location : {
        lat: number,
        lon:number
    }

    constructor(){
        this.receiver = faker.person.fullName();
        this.location = {
            lat: faker.location.latitude(),
            lon: faker.location.longitude()
        }
    }
}