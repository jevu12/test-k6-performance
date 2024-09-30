import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BASE_URL, API_PROCESSING_EVENTS } from '../config/config.js';
import { getRequest } from '../utils/httpClient.js';
import {smokeTestOptions, soakTestOptions, stressTestOptions} from '../config/testOptions.js';

const testData = new SharedArray('testData', function () {
    return JSON.parse(open('../data/testData.json'));
});

export let options = soakTestOptions;

function randomPause(min, max) {
    return Math.random() * (max - min) + min;
}

export default function () {
    testData.forEach((data) => {
        const url = `${BASE_URL}${API_PROCESSING_EVENTS}?date_from=${data.date_from}&date_to=${data.date_to}&participant_id=${data.participant_id}&event_id=${data.event_id}`;

        const res = getRequest(url);

        check(res, {
            'status es 200': (r) => r.status === 200,
            'tiempo de respuesta < 2000ms': (r) => r.timings.duration < 2000,
        });

        const body = JSON.parse(res.body);

        check(body[0], {
            'eventId existe y no es nulo': (obj) => obj.eventId && obj.eventId !== '',
            'clientId existe y no es nulo': (obj) => obj.clientId && obj.clientId !== '',
            'eventDate existe y no es nulo': (obj) => obj.eventDate && obj.eventDate !== '',
            'productId existe y no es nulo': (obj) => obj.productId && obj.productId !== '',
            'productName existe y no es nulo': (obj) => obj.productName && obj.productName !== '',
            'amount existe y no es nulo': (obj) => obj.amount !== null && obj.amount !== '',
            'participantId existe y no es nulo': (obj) => obj.participantId && obj.participantId !== '',
            'participantUsername existe y no es nulo': (obj) => obj.participantUsername && obj.participantUsername !== '',
            'ruvId existe y no es nulo': (obj) => obj.ruvId && obj.ruvId !== '',
            'eventDescription existe y no es nulo': (obj) => obj.eventDescription && obj.eventDescription !== '',
        });

        sleep(randomPause(1, 5));
    });
}
