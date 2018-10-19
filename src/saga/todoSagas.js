import * as types from "../actions/types";

import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './api';

function* FetchTODOList() {
    try {
        const todoItems = yield Api.getToDoListAPI();
        yield put({ type: types.FETCH_TODOS_SUCCEEDED, payload: todoItems });
    } catch (error) {
        yield put({ type: types.FETCH_TODOS_FAILED });
    }
}
export function* watchFetchTODOList() {
    yield takeLatest(types.FETCH_TODOS_STARTED, FetchTODOList);
}

function* FetchADDTODO(action) {
    try {
        const todoItems = yield Api.addToDoItemAPI(action.todoItem);
        yield put({ type: types.FETCH_ADD_TODO_SUCCEEDED, payload: todoItems });
    } catch (error) {
        yield put({ type: types.FETCH_ADD_TODO_FAILED });
    }
}
export function* watchFetchADDTODO() {
    yield takeLatest(types.FETCH_ADD_TODO_STARTED, FetchADDTODO);
}

function* FetchUpdateTODO(action) {
    try {
        const todoItems = yield Api.updateToDoItemAPI(action.todoItem);
        yield put({ type: types.FETCH_UPDATE_TODO_SUCCEEDED, payload: todoItems });
    } catch (error) {
        yield put({ type: types.FETCH_UPDATE_TODO_FAILED });
    }
}
export function* watchFetchUPDATETODO() {
    yield takeLatest(types.FETCH_UPDATE_TODO_STARTED, FetchUpdateTODO);
}

function* FetchDeleteTODO(action) {
    try {
        const todoItems = yield Api.deleteToDoItemAPI(action.todoItem);
        yield put({ type: types.FETCH_DELETE_TODO_SUCCEEDED, payload: todoItems });
    } catch (error) {
        yield put({ type: types.FETCH_DELETE_TODO_FAILED });
    }
}
export function* watchFetchDeleteTODO() {
    yield takeLatest(types.FETCH_DELETE_TODO_STARTED, FetchDeleteTODO);
}

function* FetchCompleteTODO(action) {
    try {
        const todoItems = yield Api.completeToDoItemAPI(action.todoItem);
        yield put({ type: types.FETCH_COMPLETE_TODO_SUCCEEDED, payload: todoItems });
    } catch (error) {
        yield put({ type: types.FETCH_COMPLETE_TODO_FAILED });
    }
}
export function* watchFetchCompleteTODO() {
    yield takeLatest(types.FETCH_COMPLETE_TODO_STARTED, FetchCompleteTODO);
}

function* FetchwatchFetchINIT_UPDATE(action) {
    yield put({ type: types.INIT_UPDATE_TODO, payload: action.payload });
}
export function* watchFetchINIT_UPDATE() {
    yield takeLatest(types.INIT_UPDATE_TODO, FetchwatchFetchINIT_UPDATE);
}
