import { Form, Button } from 'react-bootstrap';
import '../styles/CheckoutForm.css'
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const { cart, getTotal, emptyCart } = useContext(cartContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;

        const order = {
            buyer: { name, email, phone },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }

        const id = await createOrder(order);

        Swal.fire({
            title: "Compra realizada!",
            text: `Muchas gracias por su compra, su id es: ${id}`,
            icon: "success"
            }
        );

        emptyCart();
    };

    return (
        <Form className="form-cart" onSubmit={handleSubmit}>
            <h3>Finalizar Compra</h3>
            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" required />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" required />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Ingresa tu teléfono" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
                Enviar
            </Button>
        </Form>
    );
};

export default CheckoutForm;