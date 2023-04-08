import axios from "axios";
import osmtogeojson from "osmtogeojson";

export const getCountries = () =>
{

    let response = axios.get("https://restcountries.com/v3.1/all");

    return response.then((res) => {
        return res.data;
    });
}

export const getCountriesByName = (name:string) =>
{

    let response = axios.get("https://restcountries.com/v3.1/name/"+ name);

    return response.then((res) => {
        return res.data;
    });
}


export const getGeoJSON = (relationURL:string) => {
    const relationID = relationURL.match(/\/relation\/(\d+)/)![1];
    const apiUrl = `https://overpass-api.de/api/interpreter?data=[out:json];relation(${relationID});out geom;`;
    
    let response = axios.get(apiUrl);
  
    return axios.get(apiUrl)
    .then((response) => {
      const elements = response.data;
      const geojson = osmtogeojson(elements);
      return geojson;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
  }