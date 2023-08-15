import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    news: [] , 
    loading : false,
    error : false,
}

export const getNews  = createAsyncThunk(
    "getNewsFunc" , //action type name

    async () => {
        const API_KEY = "78330efd8ec34810a6680d3d371c9186"
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

        const {data} = await axios(url)
        console.log(data)
        return data.articles
    }
)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews : (state) =>{
        state.news = []
    },
  },

//! createAsyncThunk metodu bir middleware olarak api gibi dış kaynaklı statelerin redux ortamında olşrulmasnı sağlar ancak statelerin api deki durumuna göre güncellenmelerini sağlamaz bunun için slice iindeki extraReducer kullanılır.


extraReducers: (builder) =>{
    builder.addCase(
        (getNews.pending,
           (state)=>{
            state.loading = true
           })
    )
    .addCase(getNews.fulfilled , (state , action) =>{
        state.news = action.payload
        state.loading = false
    })
    .addCase(getNews.rejected , (state ) =>{
        state.error = true
        state.loading = false
    })
},
})

export const {clearNews} = newsSlice.actions

export default newsSlice.reducer