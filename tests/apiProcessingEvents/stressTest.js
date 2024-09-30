import { BASE_URL, API_PROCESSING_EVENTS } from '../../config/config.js';
import { getRequest } from '../../utils/httpClient.js';
import { stressTestOptions } from '../../config/options/optionsProcessingEvents/stressTestOptions.js';
import { executeTest } from '../../utils/UtilsTestProcessingEvents.js';

const testData = JSON.parse(open('../../data/testData.json'));

export let options = stressTestOptions;

export default function () {
    executeTest(testData, getRequest, BASE_URL, API_PROCESSING_EVENTS);
}