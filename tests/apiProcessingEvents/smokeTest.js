import { SharedArray } from 'k6/data';
import { BASE_URL, API_PROCESSING_EVENTS } from '../../config/config.js';
import { getRequest } from '../../utils/httpClient.js';
import { smokeTestOptions } from '../../config/options/optionsProcessingEvents/smokeTestOptions.js';
import { executeTest } from '../../utils/UtilsTestProcessingEvents.js';

const testData = new SharedArray('testData', function () {
    return JSON.parse(open('../data/testData.json'));
});

export let options = smokeTestOptions;

export default function () {
    executeTest(testData, getRequest, BASE_URL, API_PROCESSING_EVENTS);
}