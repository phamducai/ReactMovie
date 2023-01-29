import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

const App = () => {
  const onchange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker onChange={onchange} onOk={onchange} format={dateFormat} />
    </Space>
  );
};
export default App;
