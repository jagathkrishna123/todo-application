import { commonAPI } from "./commonApi";
const serverURL = 'http://localhost:5000'

//upload to do items
export const uploadBook = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/booklist`,reqBody);
}
//get all to do items
export const getAllBooks = async ()=>{
    return await commonAPI('GET',`${serverURL}/booklist`,"");
}
//delete todo items
export const deleteBook = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/booklist/${id}`,{});
}
//to get details of specific task by its id
export const getBookDetailsById = async(id)=>{
    return await commonAPI('GET',`${serverURL}/booklist/${id}`,"")
}