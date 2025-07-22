import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const PersonalInfo = () => {
  const { theme } = useTheme();
  
  const personalDetails = [
    { label: 'First Name', value: 'Steve' },
    { label: 'Last Name', value: 'Milner' },
    { label: 'Age', value: '27 Years' },
    { label: 'Nationality', value: 'Tunisian' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Address', value: 'Tunis' },
    { label: 'Phone', value: '+21621184010' },
    { label: 'Email', value: 'you@mail.com' },
    { label: 'Skype', value: 'steve.milner' },
    { label: 'Languages', value: 'English, French' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {personalDetails.map((detail, index) => (
        <div key={index} className="flex">
          <span className={`font-medium mr-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {detail.label}:
          </span>
          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {detail.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;