import { useState } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import FeriasForm from "../FeriasForm/FeriasForm";
import Table from "react-bootstrap/Table";

function FeriasCard() {
  const [feriass, setFeriass] = useState([]);

  // adicionar um novo item da lista
  const addFerias = (newFerias) => {
    const updatedFeriass = [...feriass, newFerias];
    setFeriass(updatedFeriass); // feriass = array de cinco itens
    //feriass = [...feriass, newFerias]
  };

  // deletar um item da lista
  const deleteFerias = (feriasKey) => {
    const newFeriass = feriass.filter((ferias, index) => {
      return index !== feriasKey;
    });

    setFeriass(newFeriass);
  };

  // renderizar todos os itens da lista
  const renderFeriass = feriass.map((ferias, index) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Colaborador(a)</th>
            <th>Parcela</th>            
            <th>Início</th>
            <th>Dias</th>
            <th>Fim</th>              
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3}>{ferias.colaborador}</td>
            <td>1ª</td>
            <td>{ferias.inicio1}</td>
            <td>{ferias.dias1}</td>
            <td>fazer</td>  
          </tr>
          <tr>
            {/* <td>{ferias.colaborador}</td> */}
            <td>2ª</td>
            <td>{ferias.inicio2}</td>
            <td>{ferias.dias2}</td>
            <td>fazer</td>
          </tr>
          <tr>
            {/* <td>{ferias.colaborador}</td> */}
            <td>3ª</td>
            <td>{ferias.inicio3}</td>
            <td>{ferias.dias3}</td>
            <td>fazer</td>
          </tr>
        </tbody>
        <Button variant="danger" onClick={() => deleteFerias(index)}>
          Excluir
        </Button>
      </Table>     
    );
  });

  // informa que a função addFerias está sendo passada por props para o FeriasForm
  return (
    <Container>
      <Row>
        <FeriasForm addFerias={addFerias} />
      </Row>
      <Row>{renderFeriass}</Row>
    </Container>
  );
}

export default FeriasCard;
