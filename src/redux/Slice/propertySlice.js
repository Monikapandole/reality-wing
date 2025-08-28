import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addProperty as addPropertyService, updateProperty as updatePropertyService } from '../../Api/services/propertyServices';

// Async thunk for adding property
export const addPropertyAsync = createAsyncThunk(
  'property/addPropertyAsync',
  async (propertyData, token,{ rejectWithValue }) => {
    try {
      const response = await addPropertyService(propertyData,token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to add property');
    }
  }
);

// Async thunk for updating property
export const updatePropertyAsync = createAsyncThunk(
  'property/updatePropertyAsync',
  async ({ id, data ,token}, { rejectWithValue }) => {
    try {
      const response = await updatePropertyService({ id, data ,token});
      return { id, data: response };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update property');
    }
  }
);

const propertySlice = createSlice({
  name: 'property',
  initialState: {
    properties: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
    // Local state management (for immediate UI updates)
    addProperty: (state, action) => {
      const newProperty = { id: Date.now(), ...action.payload };
      state.properties.push(newProperty);
    },
    updateProperty: (state, action) => {
      const { id, data } = action.payload;
      const index = state.properties.findIndex((property) => property.id === Number(id));
      if (index !== -1) {
        state.properties[index] = { ...state.properties[index], ...data };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Property
      .addCase(addPropertyAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addPropertyAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // Add the new property to the list if the API returns it
        if (action.payload.data) {
          state.properties.push(action.payload.data);
        }
      })
      .addCase(addPropertyAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      // Update Property
      .addCase(updatePropertyAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePropertyAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // Update the property in the list
        const { id, data } = action.payload;
        const index = state.properties.findIndex((property) => property.id === Number(id));
        if (index !== -1) {
          state.properties[index] = { ...state.properties[index], ...data };
        }
      })
      .addCase(updatePropertyAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { 
  addProperty, 
  updateProperty, 
  setProperties, 
  clearError, 
  clearSuccess 
} = propertySlice.actions;

export default propertySlice.reducer;
