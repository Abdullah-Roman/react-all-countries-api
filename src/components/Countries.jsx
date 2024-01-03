import React, { useEffect, useState } from "react";
import "./style.css";

const Countries = () => {
  const [country, setcountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountry(data));
  }, []);
  return (
    <div>
      <h1 className="heading">React All Countries API</h1>

      <div className="main">
        {country.map((data) => (
          <div key={data.name.common} className="country">
            <img src={data.flags.png} alt="" />
            <h2>Name: {data.name.common}</h2>
            <h3>Capital: {data.capital}</h3>
            <h3>Population: {data.population}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
