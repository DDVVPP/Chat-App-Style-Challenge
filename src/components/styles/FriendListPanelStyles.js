import styled from 'styled-components';
import { color, typography } from 'styled-system';

export const FriendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: 1vw;
`;
export const FlexRowSpaceBtwnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2%;
`;
export const Searchbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  border-radius: 50px;
  border: none;
  ${color}
  img {
    align-self: center;
    padding: 0.5rem;
    margin-left: 1rem;
    max-width: 5%;
    height: auto;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  ${color}
  padding: .5rem;
  outline: none;
  &::placeholder {
    opacity: 50%;
  }
`;
export const FlexRowEndContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30%;
  height: auto;
  img {
    align-self: center;
    margin-left: 5%;
    max-width: 15%;
    height: auto;
  }
`;
export const ParagraphText = styled.p`
  text-align: left;
  ${typography}
`;
export const ParagraphTextCenter = styled.p`
  text-align: center;
  margin-top: -35%;
  margin-bottom: 0;
  ${typography}
`;
export const ParagraphTextGrey = styled.p`
  opacity: 30%;
  margin-right: 0.5rem;
  ${typography}
`;
export const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;
export const Button = styled.button`
  ${color}
  margin-top: .3rem;
  justify-content: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition-duration: 0.4s;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.deepBlue};
    color: white;
  }
`;
