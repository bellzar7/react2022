import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    error: null,
    carForUpdate: null,
    prev: null,
    next: null
}

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}) => {
        const {data} = await carService.updateById(id, car);
        return data
    }
)

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll({page});
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: (builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.error = null
                    state.cars = action.payload.data
                    state.prev = action.payload.prev
                    state.next = action.payload.next
                })
                .addCase(getAll.rejected, (state, action) => {
                    state.error = action.payload
                })
                .addCase(updateById.fulfilled, (state, action) => {
                    const currentCar = state.cars.find(value => value.id === action.payload.id);
                    Object.assign(currentCar, action.payload);
                    state.carForUpdate = null;
                })

    )
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById
}

export {carReducer, carActions}