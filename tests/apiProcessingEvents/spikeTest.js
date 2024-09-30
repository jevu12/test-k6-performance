import { BASE_URL, API_PROCESSING_EVENTS } from '../../config/config.js';
import { getRequest } from '../../utils/httpClient.js';
import { spikeTestOptions } from '../../config/options/optionsProcessingEvents/spikeTestOptions.js';
import { executeTest } from '../../utils/UtilsTestProcessingEvents.js';

export let options = spikeTestOptions;

export default function () {
    executeTest(testData, getRequest, BASE_URL, API_PROCESSING_EVENTS);
}