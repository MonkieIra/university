import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UniversityItem from '../UniversityItem/UniversityItem';
import LoadingErrorMessage from '../LoadingErrorMessage/LoadingErrorMessage';

const UniversitiesList = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Kazakhstan');
        setUniversities(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Universities List</h1>
      <LoadingErrorMessage loading={loading} error={error} />
      <ul>
        {universities.map((uni) => (
          <UniversityItem
            key={uni.name}
            name={uni.name}
            country={uni.country}
            region={uni.region}
            webPages={uni.web_pages}
          />
        ))}
      </ul>
    </div>
  );
};

export default UniversitiesList;