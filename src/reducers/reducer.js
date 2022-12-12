export default function reducer(state, action) {
  switch (action.type) {
    case "count":
      return { ...state, count: action.value };
    case "result":
      return { ...state, result: [...state.result, action.value] };
    case "brelan":
      return { ...state, brelan: state.brelan + 1 };
    case "edge":
      return { ...state, edge: state.edge + 1 };
    case "full":
      return { ...state, full: state.full + 1 };
    case "full":
      return { ...state, full: state.full + 1 };
    case "double-pair":
      return { ...state, doublePair: state.doublePair + 1 };
    case "reset":
      return { ...state, count: 1, brelan: 0, edge: 0, full: 0, doublePair: 0 };
  }
}
