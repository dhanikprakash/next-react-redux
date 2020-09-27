import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/api/";

export function getResults(offset, limit, searchKey) {
    return fetch(baseUrl+`search?media=music&offset=${offset}&limit=${limit}&term=${searchKey}`)
      .then(handleResponse)
      .catch(handleError);
  }