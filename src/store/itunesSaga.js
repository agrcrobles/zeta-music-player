import { select, put, takeLatest, all } from "redux-saga/effects";
import fetchJsonp from "fetch-jsonp";
import { selectSelectedSong, selectSortedSongs } from "./rootReducer";

function* fetchSongs(action) {
  const { criteria, history } = action;

  const itunesUri = "https://itunes.apple.com/search";
  const uri = `${itunesUri}?term=${encodeURI(criteria)}`;

  try {
    yield put({ type: "api/SONGS_BEGIN_REQUEST", criteria });
    const json = yield fetchJsonp(uri).then((response) => response.json());
    yield put({
      type: "api/SONGS_REQUEST_SUCCESS",
      payload: json.results.filter((song) => song.trackName !== undefined),
    });
    history.push("/");
  } catch {
    // TODO: Error handler
    yield put({ type: "api/SONGS_FAIL_REQUEST" });
  }
}
function* nextSong(action) {
  const selectedSong = yield select(selectSelectedSong);
  const songs = yield select(selectSortedSongs);

  const index = songs.findIndex((x) => x.trackId === selectedSong.trackId);

  const newIndex = index + 1;

  if (newIndex < songs.length) {
    yield put({
      type: "SET_SONG",
      selectedSong: songs[newIndex].trackId,
      canFwd: newIndex < songs.length - 1,
      canBack: true,
    });
  }
}

function* prevSong(action) {
  const selectedSong = yield select(selectSelectedSong);
  const songs = yield select(selectSortedSongs);

  const index = songs.findIndex((x) => x.trackId === selectedSong.trackId);
  const newIndex = index - 1;

  if (index > 0) {
    yield put({
      type: "SET_SONG",
      selectedSong: songs[newIndex].trackId,
      canFwd: true,
      canBack: newIndex > 0,
    });
  }
}

function* selectSong(action) {
  const { selectedSong, history } = action;
  const songs = yield select(selectSortedSongs);

  const index = songs.findIndex((x) => x.trackId === selectedSong);

  yield put({
    type: "SET_SONG",
    selectedSong,
    canFwd: index < songs.length - 1,
    canBack: index > 0,
  });

  // it works fine, i think this is the best approach, but unsure and request for comments here.
  // use redux-router history as a side effect for the saga
  // need to google for ryan florence's suggestion
  history.push("/player");
}

function* actionWatcher() {
  yield takeLatest("player/GET_SONGS", fetchSongs);
  yield takeLatest("player/SELECT_SONG", selectSong);
  yield takeLatest("player/NEXT_SONG", nextSong);
  yield takeLatest("player/PREV_SONG", prevSong);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
