"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
/**
 * Split an array into 2D arrays
 *
 * @param collection The array to be split into
 * @param size Optional. The number of items in each splitted array
 * @returns A 2D array
 */
const chunk = (collection, size) => {
    const result = [];
    size = size || 2;
    for (let x = 0; x < Math.ceil(collection.length / size); x++) {
        const start = x * size;
        const end = start + size;
        result.push(collection.slice(start, end));
    }
    return result;
};
exports.chunk = chunk;
//# sourceMappingURL=index.js.map