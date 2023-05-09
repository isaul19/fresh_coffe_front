import { dollarFormat } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ product: producto }) => {
    const { handleClickModal, handleSetProducto } = useQuiosco();

    return (
        <div className="border p-3 shadow bg-white flex flex-col justify-between">
            <div>
                <img
                    className="w-full"
                    src={`/images/${producto.imagen}.jpg`}
                    alt={`images ${producto.nombre}`}
                />

                <div className="p-5">
                    <h3 className="text-2xl font-bold">{producto.nombre}</h3>
                    <p className="mt-5 font-black text-4xl text-amber-500">
                        {dollarFormat(producto.precio)}
                    </p>
                </div>
            </div>

            <button
                onClick={() => {
                    handleClickModal();
                    handleSetProducto(producto);
                }}
                className="bg-indigo-600 hover:bg-indigo-800 text-white my-2 p-3 w-full uppercase font-bold"
                type="button"
            >
                Agregar
            </button>
        </div>
    );
};

export default Producto;
