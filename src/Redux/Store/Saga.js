import { all, fork } from 'redux-saga/effects';

import PostSaga from './Posts/Saga';

export default function * rootSaga () {
  yield all([fork(PostSaga)]);
}
