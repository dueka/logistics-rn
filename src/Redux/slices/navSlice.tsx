import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    origin: null,
    destination: null,
    travelTimeInformation: null,
  },
  reducers: {
    setOrigin(state, action: PayloadAction<null>) {
      state.origin = action.payload;
    },
    setDestination(state, action: PayloadAction<null>) {
      state.destination = action.payload;
    },
    setTravelTimeInformation(state, action: PayloadAction<null>) {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;
export default navSlice.reducer;
