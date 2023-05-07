import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1 className="text-4xl font-black">Iniciar Sesión</h1>
            <p>Para crear un pedido debes iniciar sesión</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10 flex flex-col space-y-4">
                <form noValidate>
                    <label className="text-slate-800">
                        Email:
                        <input
                            className="mt-2 w-full block p-3 bg-gray-50"
                            name="email"
                            type="email"
                            placeholder="Tú email"
                        />
                    </label>

                    <label className="text-slate-800">
                        Contraseña:
                        <input
                            className="mt-2 w-full block p-3 bg-gray-50"
                            name="password"
                            type="password"
                            placeholder="Tú Contraseña"
                        />
                    </label>

                    <button
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer transition-colors"
                        type="sub"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <nav className="mt-5">
                    <Link className="text-sm hover:underline" to="/auth/register">
                        ¿No tienes cuenta? Crea una
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Login;
