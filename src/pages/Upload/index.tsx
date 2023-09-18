import React, { useState } from 'react';

import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { RcFile } from 'antd/lib/upload';

import styles from './index.module.less';

const FileUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [file, setFile] = useState<RcFile>();

  const { Dragger } = Upload;

  const handleCustomRequest = (options: any) => {
    const { onSuccess } = options;
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'done') {
      setFile(info.file.originFileObj);
    }
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-2);

    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };

  const handleFileModification = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target!.result;
        if (typeof content === 'string') {
          const modifiedContent = content!.replace(/^\s*[\r\n]/gm, '');
          const modifiedBlob = new Blob([modifiedContent], {
            type: 'text/plain',
          });
          const modifiedFile = new File([modifiedBlob], file.name, {
            type: 'text/plain',
          });
          const url = URL.createObjectURL(modifiedFile);
          const a = document.createElement('a');
          a.href = url;
          a.download = modifiedFile.name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } else {
          console.error('File content is not a string.');
        }
      };
      reader.readAsText(file);
    }
  };
  const props = {
    accept: '.txt',
    customRequest: handleCustomRequest,
    onChange: handleChange,
    multiple: true,
    directory: true,
  };
  return (
    <div className={styles.wrapper}>
      <Dragger className={styles.dragger} {...props} fileList={fileList}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或者拖拽文件到此上传</p>
        <p className="ant-upload-hint">支持单个或批量上传,仅支持.txt格式文件</p>
      </Dragger>
      <Button
        type="primary"
        className={styles.downloadButton}
        onClick={handleFileModification}
      >
        下载
      </Button>
    </div>
  );
};

export default FileUpload;
