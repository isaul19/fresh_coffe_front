import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
    const { categorias } = useQuiosco();

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img className="w-40" src="images/logo.svg" alt="Imagen Logo" />
            </div>

            <div className="mt-10">
                {categorias.map((categoria) => (
                    <Categoria key={categoria.id} categoria={categoria} />
                ))}
            </div>

            <div className="my-5 py-5">
                <button
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600"
                    type="button"
                >
                    Cancelar order
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
