const initialState = {
  global: null,
  country: []
};


const covid = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GLOBAL_STATS' :
      return {
        ...state,
        global: action.payload
      }


    case 'GET_ONE_COUNTRY' :
      const oneCountry = state.global.Countries.filter(el => el.Country === action.payload)
      return {
        ...state,
        country: oneCountry
      }

    default:
      return state
  }
}

export default covid;
