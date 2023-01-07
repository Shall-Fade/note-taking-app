import { createStore } from "vuex";

const store = createStore({
  state: {
    isNoteModalVisible: false,
    isFolderModalVisible: false,
    isNoteBlockVisible: false,
    isSearchVisible: false,
    folders: [
      {
        title: "Personal",
        notes: [],
      },
      {
        title: "Work",
        notes: [],
      },
      {
        title: "Travel",
        notes: [],
      },
    ],
    selectedFolder: "",
    selectedNote: "",
    recentNotes: [],
  },
  mutations: {
    TOGGLE_NOTE_MODAL(state, isNoteModalVisible) {
      state.isNoteModalVisible = isNoteModalVisible;
    },
    TOGGLE_FOLDER_MODAL(state, isFolderModalVisible) {
      state.isFolderModalVisible = isFolderModalVisible;
    },
    TOGGLE_NOTE_BLOCK(state, isNoteBlockVisible) {
      state.isNoteBlockVisible = isNoteBlockVisible;
    },
    TOGGLE_SEARCH_BLOCK(state, isSearchVisible) {
      state.isSearchVisible = isSearchVisible;
    },
    TOGGLE_SELECTED_FOLDER(state, folder) {
      state.selectedFolder = folder;
    },
    TOGGLE_SELECTED_NOTE(state, note) {
      state.selectedNote = note;
    },
    ADD_FOLDER(state, folder) {
      state.folders.push(folder);
    },
    ADD_RECENT_NOTES(state, note) {
      state.recentNotes.unshift(note);
    },
    CHANGE_FOLDER_DATA(state, folders) {
      state.folders = folders;
    },
  },
});

export default store;
