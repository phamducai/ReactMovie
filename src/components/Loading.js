import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function Loading() {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      )
  return (
    <Spin indicator={antIcon} />
  )
}

export default Loading