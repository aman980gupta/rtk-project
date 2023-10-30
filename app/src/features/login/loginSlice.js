import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserLogin,fetchUserRESOURCE } from './loginApi';

const initialState = {
 details:{userLogin:{},userProfile:{}},
  status: 'idle',
};

export const fetchLoginAsync = createAsyncThunk(
  'login/fetchUserLogin',
  async (userData) => {
    const response = await fetchUserLogin(userData);
    console.log(response)
    return response.data;
  }
);
export const fetchResourceAsync = createAsyncThunk(
  'login/fetchUserRESOURCE',
  async (token) => {
    const response = await fetchUserRESOURCE(token);
    console.log(response.data)
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setDetails:(state,action)=>{
         state.details.userLogin= action.payload
        //state.details.email=action.payload.password
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log("fetchAssync",action.payload)
        state.details.userLogin = action.payload;
      })
      .addCase(fetchResourceAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResourceAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log("fetchResourceAsync",action.payload)
        state.details.userProfile = action.payload;
      })
      .addCase(fetchLoginAsync.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchResourceAsync.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

 export const { setDetails} = loginSlice.actions;


export default loginSlice.reducer;


