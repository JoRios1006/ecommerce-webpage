export default function itemsReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.item];
    case 'remove':
      return state.filter(([id]) => id !== action.itemId);
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}