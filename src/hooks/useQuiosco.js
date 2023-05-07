import { useContext } from "react";
import { QuioscoContext } from "../context/QuiscoProvider";

const useQuiosco = () => {
    const context = useContext(QuioscoContext);
    if (!context) {
        throw new Error("useQuiosco debe estar dentro del proveedor QuioscoContext");
    }
    return context;
};

export default useQuiosco;
