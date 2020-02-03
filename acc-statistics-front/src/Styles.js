import styled from "styled-components";

export const DataContainer = styled.div`
  background-color: #ffffff;
  width: 1100px;
  margin: 10px auto;
  padding: 10px 30px;
`;

export const AppContainer = styled.div`
  background-color: #fcfcfc;
`;

export const DataElementContainer = styled.div`
  margin: 25px auto;
  width: 1000px;
`;

export const DownloadCSV = styled.div`
  cursor: pointer;
  float: right;
  margin: 10px;
  opacity: 0.6;
  transition: opacity 0.25s;

  :hover {
    opacity: 1;
  }
`;
