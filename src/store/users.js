import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:'user',
  initialState : [],

  reducers:{
    addUser(state, action){
      const  userData = action.payload ;
       state.push(userData);

    },
    removeUser(state, action){

       state.filter(item => item.username !== action.payload);
    }
  }

})


export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;