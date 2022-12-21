import axios from 'axios'

const baseurl=process.env.REACT_APP_BASEURL
const apiKey=process.env.REACT_APP_APIKEY

export const getListFood = async () =>{
    try {
        const Food = await axios.get(`${baseurl}/api/v1/foods`, {
            headers: {
            'apiKey': apiKey,
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI4NDg2ZmQ1YS0xOWRkLTQ1NGEtYWUxMy02Y2Y2ZWM2OTE0NDgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzE0NjgwMzZ9.nbi5tTyypyZ0QPg8_xAFikcniKQpRPxdOoxq3HH3wGM'
            }
            })
        console.log({ListFood:Food});
    } catch (error) {
        console.log(error);
    }
    }
