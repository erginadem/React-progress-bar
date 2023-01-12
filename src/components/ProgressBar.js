import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

const Progress = () => {
  const [now, setNow] = useState(0);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col className="d-flex flex-column gap-3 aling-center">
            <div>
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="primary"
                  onClick={() => setNow((prev) => prev + 10)}
                  disabled={now == 100}
                >
                  <FaPlus />
                </Button>

                <Button
                  variant="danger"
                  onClick={() => setNow((prev) => prev - 10)}
                  disabled={!now}
                >
                  <FaMinus />
                </Button>
              </ButtonGroup>
            </div>

            <ProgressBar striped variant="warning" now={now} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Progress;
