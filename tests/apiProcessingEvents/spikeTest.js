import { BASE_URL, API_PROCESSING_EVENTS } from '../../config/config.js';
import { getRequest } from '../../utils/httpClient.js';
import { executeTest } from '../../utils/UtilsTestProcessingEvents.js';

import { spikeTestOptions  } from '../../config/options/optionsProcessingEvents/spikeTestOptions.js';



const testData = JSON.parse(open('../../data/testData.json'));

export let options = spikeTestOptions;

export default function () {
    executeTest(testData, getRequest, BASE_URL, API_PROCESSING_EVENTS);
}