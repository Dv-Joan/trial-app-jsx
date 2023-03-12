
/** 
 @Author: Brayan Paucar
 
 Este componente contiene un CRUD (Create, Read, Update, Delete) de una tabla de datos {clans} , el cual se puede agregar, editar y eliminar datos.
 

 * @param {Object} clan - Clan en el array clans
 * @param {number} clan.id - Identificador del clan
 * @param {string} clan.name - Nombre del clan
 * @param {string} clan.description - Descripcion del clan
 * @param {boolean} editing - Indica si se esta editando un clan
 * @param {Object} currentClan - Objeto que contiene los datos del clan que se esta editando
 * @param {function} addClan - Inserta un nuevo clan en el array clans
 * @param {function} deleteClan - Elimina un clan del array clans
 * @param {function} updateClan - Actualiza un clan en el array clans
 * @param {function} setCurrentClan - Actualiza el objeto currentClan
 * @param {function} setEditing - Actualiza el estado de la variable editing
 * @param {function} setClans - Actualiza el array clans
 * @param {Array} clans - Array que contiene los clans
 * @param {Object} props - Propiedades del componente
 * @returns {JSX.Element} - Retorna un componente que contiene un CRUD de una tabla de datos {clans}
 */

import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const classicClans = [
    {
        id: uuidv4(),
        name: "Old Wolves",
        mode: "Loberos",
    },
    {
        id: uuidv4(),
        name: "FazeCLAN",
        mode: "Loberos",
    },
    {
        id: uuidv4(),
        name: "Gods Vnzla",
        mode: "Humaneros",
    },
];
export const initialValues = {
    id: null,
    name: "",
    mode: "",
};

export const CrudContext = createContext(
    {
        clans: classicClans,
        addClan: () => { },
        deleteClan: () => { },
        editClan: () => { },
        updateClan: () => { },
        currentClan: initialValues,
        setCurrentClan: () => { },
        modoEdicion: false,
        setModoEdicion: () => { },
    }
);

export default function CrudContextProvider({ children }) {
    const [clans, setClans] = useState(classicClans);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [currentClan, setCurrentClan] = useState(initialValues);

    // Agrega un nuevo clan al array clans

    const addClan = (clan) => {
        clan.id = uuidv4();
        setClans([...clans, clan]);
    };

    // Elimina un nuevo clan al array clans

    const deleteClan = (id) => {
        setClans(clans.filter((clan) => clan.id !== id));
    };

    // Pone en estado de edicion el clan seleccionado
    const editClan = (clan) => {
        setModoEdicion(true);
        setCurrentClan({
            id: clan.id,
            name: clan.name,
            mode: clan.mode,
        });
    };

    // Actualiza un nuevo clan al array clans
    const updateClan = (id, editedClan) => {
        setModoEdicion(false);
        setClans(clans.map((clan) => (clan.id === id ? editedClan : clan)));
    };


    const values = {
        clans,
        modoEdicion,
        currentClan,
        addClan,
        deleteClan,
        editClan,
        updateClan,
        setCurrentClan,
        setModoEdicion,
    }
    return (
        <CrudContext.Provider value={values}>
            {children}
        </CrudContext.Provider>
    );
}

export function useCrudContext() {
    if (!CrudContext) {
        throw new Error("useCrudContext debe estar dentro del proveedor CrudContextProvider");
    }
    return useContext(CrudContext);
}