const reducer = (state, action) => { // always return state otherwise it will result into an error -> undefined state
    if (action.type === "ADD_ITEM") {
        return { ...state, animals: [...state.animals, action.payload], isModalOpen: true, modalContent: "Item added." }
    }
    if (action.type === "NO_VALUE") {
        return { ...state, isModalOpen: true, modalContent: "Please add Item." }
    }
    if (action.type === "CLOSE_MODAL") {
        return { ...state, isModalOpen: false, modalContent: "" }
    }
    if (action.type === "REMOVE_ITEM") {
        let filteredAnimals = state.animals.filter(animal => animal.id !== action.payload)
        return { ...state, animals: filteredAnimals, isModalOpen: true, modalContent: "Item Removed." }
    }
    throw new Error("Invalid Action.")
}

export default reducer;