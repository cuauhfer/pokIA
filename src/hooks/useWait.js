
/**
 * useWait async hook. Use it to "Pause" the program execution for 'ms' miliseconds.
 * To use this hook inside a loop, import it using the alias wait: "import {useWait as wait} from 'path'"
 * @param {Number} ms Time in miliseconds to resolve the promise and continue the execution
 * @returns A promise, need to be resolved with await or then
 */
export const useWait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}