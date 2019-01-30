import axios from "axios";

const isBrowser = () => typeof window !== 'undefined';

const url = isBrowser() ? 'api/todo/list' : 'http://localhost:3000/api/todo/list'

const changeList = list => ({type: 'CHANGE_LIST', list})

export const getTodoList = () => {
  return (dispatch) => {
    return axios.get(url).then((response)=>{
      dispatch(changeList(response.data))
      // console.log(response);
    })
  }
}