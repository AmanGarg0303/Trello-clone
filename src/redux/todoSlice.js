import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainCard: [
    {
      id: 101,
      groupName: "My Resources",
      tasks: [
        { id: 1, title: "Test-1", date: new Date().toLocaleString() },
        { id: 2, title: "Test-2", date: new Date().toLocaleString() },
      ],
    },
    {
      id: 102,
      groupName: "Todo",
      tasks: [
        // { id: 3, title: "Test-3", date: new Date().toLocaleString() },
        // { id: 4, title: "Test-4", date: new Date().toLocaleString() },
      ],
    },
    {
      id: 103,
      groupName: "Doing",
      tasks: [
        // { id: 5, title: "Test-5", date: new Date().toLocaleString() },
        // { id: 6, title: "Test-6", date: new Date().toLocaleString() },
      ],
    },
    {
      id: 104,
      groupName: "Done",
      tasks: [
        // { id: 7, title: "Test-7", date: new Date().toLocaleString() },
        // { id: 8, title: "Test-8", date: new Date().toLocaleString() },
      ],
    },
  ],
};

export const userSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const items = Array.from(state.mainCard);
      const a = items.find((item) => item.id === action.payload.cardId);
      const aArray = a.tasks;
      aArray.push({
        id: Date.now(),
        title: action.payload.message,
        date: new Date().toLocaleString(),
      });

      state.mainCard = JSON.parse(JSON.stringify(items));

      //logic

      // state.mainCard
      //   .find((item) => item.id === action.payload.cardId)
      //   .tasks.push({
      //     id: Date.now(),
      //     title: action.payload.message,
      //     date: new Date().toLocaleString(),
      //   });
    },
    deleteTask: (state, action) => {
      const items = Array.from(state.mainCard);
      const a = items.find((item) => item.id === action.payload.cardId);
      const aArray = a.tasks;

      aArray.splice(
        aArray.findIndex((item) => item.id === action.payload.id),
        1
      );

      state.mainCard = JSON.parse(JSON.stringify(items));
    },
    editTask: (state, action) => {
      const items = Array.from(state.mainCard);
      const a = items.find((item) => item.id === action.payload.cardId);
      const aArray = a.tasks;

      const b = aArray.find((item) => item.id === action.payload.id);
      b.title = action.payload.newMessage;
      b.date = new Date().toLocaleString();

      state.mainCard = JSON.parse(JSON.stringify(items));
    },

    shiftTask: (state, action) => {
      const items = Array.from(state.mainCard);

      const a = items.find(
        (item) => item.id === Number(action.payload.res.source.droppableId)
      );
      const aArray = a.tasks;

      const splicedItem = aArray.splice(action.payload.res.source.index, 1);

      const b = items.find(
        (item) => item.id === Number(action.payload.res.destination.droppableId)
      );
      const bArray = b.tasks;

      bArray.splice(action.payload.res.destination.index, 0, splicedItem[0]);
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  shiftTask,
  removeFromFav,
  updateFavourites,
} = userSlice.actions;

export default userSlice.reducer;
