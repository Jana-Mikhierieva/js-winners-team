import axios from 'axios';
import iziToast from "izitoast";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReview() {
    try {
	    const response = await axios.get('/reviews');
	    
	  if (response.data.length === 0) {
  
		  iziToast.error({
			message: "Oops...Something went wrong!",
			position: 'bottomRight',
		  });
		  return;
	    }
	    return response.data;
    } catch(error) {
        iziToast.error({
				message: "Oops...Something went wrong!",
			  position: 'bottomRight',
		  });
    }
}



