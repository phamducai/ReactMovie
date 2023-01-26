import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

const StyledSearch = styled(Search)`
  .ant-input-search-button {
    background-color: #8b0000;
    color: white;
    border-color: #8b0000;
    &:hover {
      background-color: green;
      //   color: #your-custom-color-on-hover;
      border-color: #green;
    }
  }
`;

export const MySearch = (props) => {
  return <StyledSearch {...props} />;
};
