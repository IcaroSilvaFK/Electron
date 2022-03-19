import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Ft7b5j2cqpce21.png&f=1&nofb=1");

  background-repeat: no-repeat;
  background-size: cover;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.1);

  padding: 10px 30px;

  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  img {
    width: 500px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .containerLink {
      display: flex;
      margin-right: 100px;
      margin-top: 5px;
      a {
        font-size: 12px;
        color: #fff;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Separato = styled.div`
  width: 100px;
  height: 2px;

  background-color: #000;

  margin-top: -10px;

  border-radius: 10px;
`;

export const Button = styled.button.attrs({
  type: "submit",
})`
  padding: 10px;
  border-radius: 2px;

  margin: 10px auto;

  background-color: ${(props) => (props.isValid ? "#92e3a9" : "#FC8181")};

  color: #fff;

  font-size: 14px;

  letter-spacing: 1px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
