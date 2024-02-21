import React from 'react';


const UniversityItem = ({ name, country, region, webPages }) => (
  <li>
    <strong>{name}</strong>
    <p>
      <strong>Country:</strong> {country}, <strong>Region:</strong> {region}
    </p>
    <p>
      <strong>Web Pages:</strong>
      <ul>
        {webPages.map((page, index) => (
          <li key={index}>
            <a href={page} target="_blank" rel="noopener noreferrer">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </p>
    <hr />
  </li>
);

export default UniversityItem;