import { fork } from 'redux-saga/effects';
import { 
    watchFetchTODOList,
    watchFetchADDTODO,
    watchFetchUPDATETODO,
    watchFetchDeleteTODO,
    watchFetchCompleteTODO 
} from './todoSagas';

export default function* rootSaga() {
    yield [
        fork(watchFetchTODOList),
        fork(watchFetchADDTODO),
        fork(watchFetchUPDATETODO),
        fork(watchFetchDeleteTODO),
        fork(watchFetchCompleteTODO)
    ];
}