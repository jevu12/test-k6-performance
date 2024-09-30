import { SharedArray } from 'k6/data';
import { BASE_URL, API_PROCESSING_EVENTS } from '../../config/config.js';
import { getRequest } from '../../utils/httpClient.js';
import { soakTestOptions } from '../../config/options/optionsProcessingEvents/soakTestOptions.js';
import {executeTest} from "../../utils/UtilsTestProcessingEvents";


const testData = new SharedArray('testData', function () {
    return JSON.parse(open('../data/testData.json'));
});

export let options = soakTestOptions;

export default function () {
    executeTest(testData, getRequest, BASE_URL, API_PROCESSING_EVENTS);
}