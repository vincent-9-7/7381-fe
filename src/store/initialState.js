const initialState = {
  items: {
    loading: false,
    itemDetails: [],
    error:null
  },
  productions: {
    loading: false,
    itemDetails: [],
    error:null
  },
  user:{
    loading: false,
    userDetails: [],
    error:null
  },
  cart:{

  },
  products: {

  },
  order: {
    loading: false,
    // updateing: false,
    loadingNum: 1,
    error: null,
    payment: false,
    order: {
      // result: [],
      // count: 0,
      // page: ''
    },
    // test:1,
    // row: 0,
    completeinfo: {
      info: localStorage.getItem('Order') ?
        JSON.parse(localStorage.getItem('Order')) : ''
    },
    // updateData: 'no update'
  }
  
};

export default initialState;