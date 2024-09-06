import axios from 'axios';
import iziToast from "izitoast";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews';

export async function getReview() {
    try {
	    const response = await axios.get();
	    
	  if (response.data.length === 0) {
  
		  iziToast.error({
			message: "Sorry, no Reviews found.",
			position: 'bottomRight',
		  });
		  return;
	    }
	    return response.data;
    } catch {
        iziToast.error({
			message: "Sorry, no Reviews found.",
			position: 'bottomRight',
		  });
    }
}



