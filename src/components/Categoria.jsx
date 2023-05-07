import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco();

    const categoriaActive =
        categoria.nombre === categoriaActual.nombre ? "bg-amber-400" : "";

    return (
        <button
            className={`flex items-center gap-4 border w-full p-3 transition-colors hover:bg-amber-400 cursor-pointer ${categoriaActive}`}
            onClick={() => handleClickCategoria(categoria)}
        >
            <img
                className="w-12"
                src={`/images/icono_${categoria.icono}.svg`}
                alt="Imagen-Categoria"
            />
            <p className="text-lg font-bold truncate">{categoria.nombre}</p>
        </button>
    );
};

export default Categoria;
