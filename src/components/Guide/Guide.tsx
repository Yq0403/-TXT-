import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';

// 脚手架示例组件
const Guide: React.FC = () => {
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>TXT 段落处理</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
