import { useState } from "react";
import { Button, Form } from "react-bootstrap";

// pega a informação do FeriasTable por props
function FeriasForm(props) {
  // seta os estados de todos os inputs
  const [colaborador, setColaborador] = useState("");
  // const [periodo, setPeriodo] = useState("");
  const [inicio1, setInicio1] = useState("");
  const [inicio2, setInicio2] = useState("");
  const [inicio3, setInicio3] = useState("");
  const [dias1, setDias1] = useState("");
  const [dias2, setDias2] = useState("");
  const [dias3, setDias3] = useState("");

  // monitoramento dos inputs a cada mudança
  const handleColaboradorInput = (e) => {
    setColaborador(e.target.value);
  };

  // const handlePeriodoInput = (e) => {
  //   setPeriodo(e.target.value);
  // };

  const handleInicio1Input = (e) => {
    setInicio1(e.target.value);
  };

  const handleInicio2Input = (e) => {
    setInicio2(e.target.value);
  };
  
  const handleInicio3Input = (e) => {
    setInicio3(e.target.value);
  };

  const handleDias1Input = (e) => {
    setDias1(e.target.value);
  };

  const handleDias2Input = (e) => {
    setDias2(e.target.value);
  };

  const handleDias3Input = (e) => {
    setDias3(e.target.value);
  };

  //lidar com o evento de enviar e transformar ele em um novo objeto
  const handleSubmit = (e) => {
    // prevenir que a página será carregada
    e.preventDefault();

    // cria um novo objeto
    const newFerias = {
      colaborador,
      // periodo,
      inicio1,
      inicio2,
      inicio3,
      dias1,
      dias2,
      dias3,
    };

    // chama o addFerias que está sendo passado por props com o parâmetro
    props.addFerias(newFerias);

    // limpa os inputs no final do processo
    setColaborador("");
    // setPeriodo("");
    setInicio1("");
    setInicio2("");
    setInicio3("");
    setDias1("");
    setDias2("");
    setDias3("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Colaborador(a)</Form.Label>
        <select
          class="form-select"
          aria-label="Default select example"
          type="text"
          placeholder=""
          value={colaborador}
          onChange={handleColaboradorInput}
        >
          <option selected></option>
          <option value="Leandro">Leandro</option>
          <option value="Haline">Haline</option>
          <option value="Rafael">Rafael</option>
        </select>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Label>Período</Form.Label>
        <select
          class="form-select"
          aria-label="Default select example"
          type="text"
          placeholder="Escreva o nome da pessoa autora"
          value={periodo}
          onChange={handlePeriodoInput}
        >
          <option selected></option>
          <option value="1º">1º</option>
          <option value="2º">2º</option>
          <option value="3º">3º</option>
        </select>
      </Form.Group> */}      
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div><strong>1ª Parcela</strong></div>
        <Form.Label>Início</Form.Label>
        <Form.Control
          type="date"
          placeholder=""
          value={inicio1}
          onChange={handleInicio1Input}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dias</Form.Label>
        <Form.Control
          type="number"
          placeholder="Número de dias a ser usufruido. Ex: 10"
          value={dias1}
          onChange={handleDias1Input}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div><strong>2ª Parcela</strong></div>
        <Form.Label>Início</Form.Label>
        <Form.Control
          type="date"
          placeholder=""
          value={inicio2}
          onChange={handleInicio2Input}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dias</Form.Label>
        <Form.Control
          type="number"
          placeholder="Número de dias a ser usufruido. Ex: 10"
          value={dias2}
          onChange={handleDias2Input}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div><strong>3ª Parcela</strong></div>
        <Form.Label>Início</Form.Label>
        <Form.Control
          type="date"
          placeholder=""
          value={inicio3}
          onChange={handleInicio3Input}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dias</Form.Label>
        <Form.Control
          type="number"
          placeholder="Número de dias a ser usufruido. Ex: 10"
          value={dias3}
          onChange={handleDias3Input}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agendar
      </Button>      
    </Form>
  );
}

export default FeriasForm;
