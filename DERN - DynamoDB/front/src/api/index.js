import axios from 'axios';
const SERVER = process.env.REACT_APP_SERVER
const LOCAL = process.env.REACT_APP_LOCALSERVER

//ctrl+r로 전체 바꿀수 있음 ${}

export const serverJoin =  serverJoinRequest => axios.get(`${LOCAL}/basic/service`,serverJoinRequest, {withCredentials:true})