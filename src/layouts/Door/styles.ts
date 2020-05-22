import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
     margin: 5px 0 0;
      height: 44px;
      background: #00c3ff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken('0.05', '#00c3ff')};
      }
    }
`;
