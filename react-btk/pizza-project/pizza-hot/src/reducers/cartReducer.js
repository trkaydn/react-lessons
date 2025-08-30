export default function cartReducer(state, action) {

    if (action.type === "CLEAR_CART"){
        return { ...state, items: [] };
    }

    const index = state?.items?.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[index];
    const updatedItems = [...state.items];

    switch (action.type) {
        case "ADD_ITEM":

            if (index > -1) {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                };

                updatedItems[index] = updatedItem;
            }
            else {
                updatedItems.push({ ...action.item, quantity: 1 });
            }
            return { ...state, items: updatedItems };
        case "REMOVE_ITEM":
            if(existingItem.quantity === 1){
                updatedItems.splice(existingItem, 1);
            } else {
                  const removedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1
                };

                updatedItems[index] = removedItem;
            }
            return { ...state, items: updatedItems };
        default:
            return state;
    }
}