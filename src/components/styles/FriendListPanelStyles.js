import styled from 'styled-components';

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
  background-color: ${({ theme }) => theme.colors.searchbarGrey1};
  input {
    border: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.transparent};
    padding: 1rem;
  }
  input::placeholder {
    opacity: 50%;
  }
  img {
    align-self: center;
    padding: 1rem;
    margin-left: 2rem;
    max-width: 5%;
    height: auto;
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
export const ParagraphTextGrey = styled.p`
  opacity: 30%;
  margin-right: 1rem;
`;
export const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;
export const Button = styled.button`
  background: ${({ theme }) => theme.colors.tomato};
  color: ${({ theme }) => theme.colors.white};
  height: 3rem;
  width: 3rem;
  text-align: center;
  align-self: center;
  border-radius: 50px;
  transition-duration: 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.deepBlue};
    color: white;
  }
  h2 {
    text-align: center;
  }
`;
