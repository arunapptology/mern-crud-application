import { createSlice } from "@reduxjs/toolkit";

import userData from "../Data";

const userSlices = createSlice({
  name: "users",
  initialState: userData,
  reducers: {

    addUser:(state,action)=>{
        state.push(action.payload)
      },

    
      updateUser: (state, action) => {



       

        const {  id, name, date,role,status,userImage, } = action.payload;

        const uu = state.find(user => user.id == id);

        
        console.log(id);

        if (uu) {
            uu.name = name;
            uu.date = date;
            uu.role = role;
            uu.status = status;
            uu.userImage = userImage;
        }
    },


    deleteTask: (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      }
  },
});

export const { deleteTask , addUser , updateUser} = userSlices.actions;
export default userSlices.reducer;
