import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [file, setFile] = useState(null);

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
        const content = event.target.result;
        const modifiedContent = content.replace(/^\s*[\r\n]/gm, '');
        const modifiedBlob = new Blob([modifiedContent], {
          type: 'text/plain',
        });
        const modifiedFile = new File([modifiedBlob], file.name, {
          type: 'text/plain',
        });
        const url = URL.createObjectURL(modifiedFile);

        // 创建一个下载链接
        const a = document.createElement('a');
        a.href = url;
        a.download = modifiedFile.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };
      console.log(111, file);

      reader.readAsText(file);
    }
  };
  const props = {
    accept: '.txt',
    customRequest: handleCustomRequest,
    onChange: handleChange,
    multiple: true,
  };
  return (
    <>
      <Upload {...props} fileList={fileList}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <Button onClick={handleFileModification}>添加1并下载</Button>
    </>
  );
};

export default FileUpload;
