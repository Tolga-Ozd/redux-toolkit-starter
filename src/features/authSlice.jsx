import {createSlice} from "@reduxjs/toolkit"

const initialState = { 
    user: "",

}

//slice ile bir global state in hem aciton typleri hem aciton creater fonksiyonları hemde reduceri tek bir hamlede oluşturabiliriz.
const authSlice = createSlice({
    name:"auth" ,   //?bu action type i oluşturur
    initialState,  //?burası state in başlangıç değeri için 
    reducers:{ //? action creater fonks. ve reducer için 
        setUser:(state , action) => {
            state.user = action.payload
        },
        clearUser : (state) =>{
            state.user = ""
        },
    },
})

//!olusan action fonksiyonları sliceAdi.acitions dan destructure edilerek export edilir.
 export const {setUser , clearUser} = authSlice.actions

 //!Yazılan slice in adı reducerı sliceAdi.reducer şeklinde export edilir.
 export default authSlice.reducer