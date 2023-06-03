import React from 'react';
import { Input, Space } from 'antd';

const App: React.FC = () => {

  return (
    <Space direction="vertical">
      <Input.Password placeholder="input password" />
    </Space>
  );
};

export default App;