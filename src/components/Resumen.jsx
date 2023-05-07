import { dollarFormat } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "./ResumenProducto";

const Resumen = () => {
    const { pedido, total } = useQuiosco();

    return (
        <aside className="w-72 h-screen overflow-y-scroll p-5">
            <h1 className="text-4xl font-black">Mi pedido</h1>
            <p className="text-lg my-5">Aquí podrás ver el resumen y total de tú pedido</p>

            <div className="py-10">
                {pedido.length === 0 ? (
                    <p className="text-center text-2xl">No hay elementos en tú pedido aún</p>
                ) : (
                    pedido.map((producto) => (
                        <ResumenProducto key={producto.id} producto={producto} />
                    ))
                )}
            </div>

            {pedido.length > 0 && (
                <>
                    <p className="text-xl mt-10">Total: {dollarFormat(total)}</p>

                    <form className="w-full">
                        <div className="mt-5">
                            <button
                                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center cursor-pointer w-full"
                                type="submit"
                            >
                                Confirmar pedido
                            </button>
                        </div>
                    </form>
                </>
            )}
        </aside>
    );
};

export default Resumen;
