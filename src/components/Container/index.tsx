import { Container, Row } from "./containerStyles";

export const Content = ({ children }: any) => {
  return (
    <Container>
      <Row>
        {children}
      </Row>
    </Container>
  );
};