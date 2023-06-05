import React from 'react';
import { Select } from 'antd';
import './CityInput.scss';


const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const App: React.FC = () => (
  <Select
    labelInValue
    defaultValue={{ value: 'Tbilisi', label: 'Baku' }}
    style={{ width: 120 }}
    onChange={handleChange}
    options={[
      {
        value: 'Baku',
        label: 'Baku',
      },
      {
        value: 'Tbilisi',
        label: 'Baku',
      },
    ]}
  />
);

export default App;