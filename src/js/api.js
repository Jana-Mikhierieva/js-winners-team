import axios from 'axios';
import iziToast from "izitoast";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReview() {
    try {
	    const response = await axios.get('/reviews');
	    
	  if (response.data.length === 0) {
  
		  iziToast.error({
			message: "Sorry, no Reviews found.",
			position: 'bottomRight',
		  });
		  return;
	    }
	    return response.data;
    } catch(error) {
        iziToast.error({
			message: error.message,
			position: 'bottomRight',
		  });
    }
}



