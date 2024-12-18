# React + Vite

Technocenter tienda de tecnologia en linea

Una aplicación de carrito de compras desarrollada en React que permite a los usuarios navegar entre productos, ver detalles, agregar al carrito, eliminar productos y vaciar el carrito. Además, utiliza herramientas y librerías modernas como React-Bootstrap, React-Icons, SweetAlert2, y Firebase.

Características

1. Ver Productos

Los usuarios pueden explorar una lista de productos categorizados.

Cada producto incluye información básica como nombre y descripcion.

2. Agregar al Carrito

Desde la vista de detalles de cada producto, los usuarios pueden seleccionar la cantidad deseada y agregar productos al carrito.

Validación para evitar agregar al carrito menos de 1 producto.

3. Ver Detalles del Producto

Cada producto tiene una página dedicada con detalles completos, como descripción, y una imagen.

Diseño atractivo y organizado.

4. Eliminar Productos del Carrito

En la vista del carrito, los usuarios pueden eliminar productos individualmente.

Confirmación mediante un modal de SweetAlert2 para evitar eliminaciones accidentales.

5. Vaciar Carrito

Opcion para vaciar completamente el carrito con un solo clic desde el NavBar.

Icono intuitivo y diseño minimalista.

Uso de React-Icons para el botón "Vaciar Carrito".

6. Formulario de Checkout

Si el carrito tiene productos, se despliega un formulario de checkout con campos para nombre, correo electrónico y teléfono.

Validación de campos integrada gracias a React-Bootstrap.

Integración con Firebase para registrar la orden de compra.

Tecnologías Utilizadas

1. React-Bootstrap

Utilizado para el diseño responsivo y los componentes visuales como formularios y botones.

Permite estilos modernos y consistentes en toda la aplicación.

2. React-Icons

Proporciona íconos minimalistas y personalizables.

Ejemplo:

Ícono de carrito de compras (“CartWidget”).

Ícono para vaciar el carrito (“FiShoppingCart”).

3. SweetAlert2

Usado para mostrar alertas atractivas y modales interactivos.

Confirmación antes de eliminar un producto o vaciar el carrito.

4. Firebase

Gestor de base de datos para registrar las compras realizadas desde el carrito.

Permite almacenar y recuperar información de los pedidos de manera rápida y segura.

Iniciar la aplicación:

npm run dev

Vista Previa

Inicio
Vista inicial con productos y categorías.

Carrito
Visualización de productos agregados, total de compra y opción para vaciar carrito.

Detalle del Producto
Información detallada del producto con opción para agregar al carrito.

Checkout
Formulario con validación para completar la compra.

