import { createSlice } from "@reduxjs/toolkit";

const podcastCheckboxSlice = createSlice({
  name: "podcastCheckbox",
  initialState: {
    podcasts: [
      { id: 1, title: "Trailer", isSelected: false },
      { id: 2, title: "James Q Quick Origin Story", isSelected: false },
      { id: 3, title: "Amy Dutton's Origin Story", isSelected: false },
      { id: 4, title: "Tech Behind the Podcast", isSelected: false },
      { id: 5, title: "Tech Behind SelfTeach.me", isSelected: false },
      { id: 6, title: " Freelancing (Part 1)", isSelected: false },
      { id: 7, title: " Freelancing (Part 2)", isSelected: false },
      { id: 8, title: " Freelancing (Part 3)", isSelected: false },
    ],
  },
  reducers: {
    selectPodcast(state, action) {
      const changedPodcasts = state.podcasts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isSelected: true };
        }

        return item;
      });

      state.podcasts = changedPodcasts;
    },

    unSelectPodcast(state, action) {
      const changedPodcasts = state.podcasts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isSelected: false };
        }

        return item;
      });

      state.podcasts = changedPodcasts;
    },

    selectMultiple(state, action) {
      const changedPodcasts = state.podcasts.map((item) => {
        if(item.id >= action.payload.startId && item.id <= action.payload.endId){
          return { ...item,isSelected:true };
        }

        return item;
      });

      state.podcasts = changedPodcasts;
    },
  },
});

const { actions, reducer } = podcastCheckboxSlice;
export const { selectPodcast, unSelectPodcast, selectMultiple } = actions;

export default reducer;
