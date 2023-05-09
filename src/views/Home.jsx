import useSWR from "swr";
import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";
import clienteAxios from "../config/axios";

const fetcher = () => clienteAxios("/api/productos").then((res) => res.data);

const Home = () => {
    const { categoriaActual } = useQuiosco();
    const { data, error, isLoading } = useSWR("/api/productos", fetcher);

    if (isLoading) return <p>Cargando...</p>;

    const productos = data.data.filter((product) => product.categoria_id === categoriaActual.id);

    return (
        <>
            <h1 className="text-4xl font-black"> {categoriaActual.nombre} </h1>
            <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {productos.map((product) => (
                    <Producto key={product.imagen} product={product} />
                ))}
            </div>
        </>
    );
};

export default Home;
