import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function EditarFerias({ form, setForm, apiURL, id }) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`${apiURL}/${id}`)
            .then(response => setForm(response.data))
    }, [apiURL, id, setForm])

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.put(`${apiURL}/${id}`, form)

            setShow(false)
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Alterar férias
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar férias</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Colaborador</Form.Label>
                            <Form.Control
                                type="text"
                                name="colaborador"
                                onChange={handleChange}
                                value={form.colaborador}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Início 1</Form.Label>
                            <Form.Control
                                type="text"
                                name="inicio1"
                                onChange={handleChange}
                                value={form.inicio1}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Início 2</Form.Label>
                            <Form.Control
                                type="text"
                                name="inicio2"
                                onChange={handleChange}
                                value={form.inicio2}
                            />
                        </Form.Group>
                        <Button type="submit">Alterar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditarFerias