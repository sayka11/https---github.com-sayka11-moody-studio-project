import React from 'react';
import { Select } from 'antd';

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const App: React.FC = () => (
  <Select
    labelInValue
    defaultValue={{ value: 'Geogia', label: 'Azerbaijan' }}
    style={{ width: 120 }}
    onChange={handleChange}
    options={[
      {
        value: 'Azerbaijan',
        label: 'Azerbaijan',
      },
      {
        value: 'Georgia',
        label: 'Georgia',
      },
    ]}
  />
);

export default App;