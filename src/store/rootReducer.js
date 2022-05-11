const initialState = {
  songs: [],
};

export const selectCriteria = (state) => {
  return state.criteria;
};
export const selectSortedSongs = (state) => {
  const { sortKey } = state;
  if (!sortKey) {
    return state.songs;
  }
  // sort algorithm on javascript behaves differently on string than on numbers
  if (sortKey === "primaryGenreName") {
    return state.songs.sort((a, b) => {
      return a[sortKey].localeCompare(b[sortKey]);
    });
  }
  return state.songs.sort((a, b) => {
    return a[sortKey] - b[sortKey];
  });
};
export const selectAttrs = (state) => {
  return {
    sortKey: state.sortKey,
    canBack: state.canBack,
    canFwd: state.canFwd,
  };
};
export const selectSelectedSong = (state) => {
  return state.songs.find((x) => x.trackId === state.selectedSong);
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "api/SONGS_BEGIN_REQUEST": {
      return {
        ...state,
        criteria: action.criteria,
        isLoading: true,
      };
    }

    case "api/SONGS_REQUEST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        songs: action.payload,
      };

    case "SET_SONG":
      return {
        ...state,
        selectedSong: action.selectedSong,
        canBack: action.canBack,
        canFwd: action.canFwd,
      };

    case "SET_SORT_PARAMS":
      return {
        ...state,
        sortKey: action.sortKey,
      };

    default:
      return state;
  }
}
