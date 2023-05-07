import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { categorias as categoriasData } from "../data";
const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState(categoriasData);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [producto, setProducto] = useState([]);
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);
    const [modal, setModal] = useState(false);

    const handleClickCategoria = (dataCategoria) => {
        const newCategoria = categorias.find(
            (categoria) => categoria.nombre === dataCategoria.nombre
        );
        setCategoriaActual(newCategoria);
    };

    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSetProducto = (producto) => {
        setProducto(producto);
    };

    const handleSetPedido = ({ edicion, ...producto }) => {
        if (!edicion) {
            toast.success("Producto agregado exitosamente");
            return setPedido((prev) => [...prev, producto]);
        }

        setPedido((prev) => {
            toast.success("Producto editado exitosamente");
            return prev.map((pedido) => (pedido.id === producto.id ? producto : pedido));
        });
    };

    const handleDeletePedido = (id) => {
        toast.success("Producto eliminado exitosamente");
        setPedido((prev) => prev.filter((pedido) => pedido.id !== id));
    };

    const handleSetTotal = (subTotal) => {
        setTotal((prev) => prev + subTotal);
    };

    useEffect(() => {
        setTotal((prev) =>
            pedido.reduce((total, pedido) => total + pedido.cantidad * pedido.precio, 0)
        );
    }, [pedido]);

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleSetPedido,
                handleDeletePedido,
                total,
                handleSetTotal,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
};

export { QuioscoContext, QuioscoProvider };
