import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UniversityItem from '../UniversityItem/UniversityItem';
import LoadingErrorMessage from '../LoadingErrorMessage/LoadingErrorMessage';

const UniversitiesList = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); // Направление сортировки по умолчанию: по возрастанию

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

  // Функция для сортировки университетов по имени
  const sortUniversitiesByName = () => {
    const sorted = [...universities].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (sortDirection === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setUniversities(sorted);
  };

  // Обработчик изменения направления сортировки
  const handleSortDirectionChange = () => {
    const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newSortDirection);
    sortUniversitiesByName();
  };

  return (
    <div>
      <h1>Universities List</h1>
      <button onClick={handleSortDirectionChange}>
        {sortDirection === 'asc' ? 'Сортировка A-Z' : 'Sort Z-A'}
      </button>
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
