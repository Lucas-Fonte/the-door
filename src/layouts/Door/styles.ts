import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    button {
     margin: 5px 0 0;
      height: 44px;
      background: #ff5c5c;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken('0.05', '#ff5c5c')};
      }
    }
`;
