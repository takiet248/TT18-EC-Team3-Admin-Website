import {
  doAddCourse,
  doGetAllListCourse,
  doGetOneCourse,
  doUpdateCourse,
} from "./../../asyncAction/course";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTnitialState = {
  listAllCourse: Array<IResGetCourse>;
  oneCourse: IResGetCourse;
  isLoading: boolean;
  err: any;
};

const initialState = {
  listAllCourse: [],
  oneCourse: {},
  isLoading: false,
  err: {},
} as TTnitialState;

export const courseSlice = createSlice({
  name: "course@",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all course
    builder.addCase(doGetAllListCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetAllListCourse.fulfilled,
      (state, action: PayloadAction<IResGetListAllCourse>) => {
        state.listAllCourse = action.payload.result;
        state.isLoading = false;
      }
    );
    builder.addCase(doGetAllListCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
    //get one course
    builder.addCase(doGetOneCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetOneCourse.fulfilled,
      (state, action: PayloadAction<IResGetOneCourse>) => {
        state.oneCourse = action.payload.course;
        state.isLoading = false;
      }
    );
    builder.addCase(doGetOneCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
    //add 
    builder.addCase(doAddCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doAddCourse.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doAddCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
    //update 
    builder.addCase(doUpdateCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doUpdateCourse.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doUpdateCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer } = courseSlice;
export default reducer;
