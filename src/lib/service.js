import axios from 'axios'
 async function getData (userId){
  try {
   
   const userResponse =  await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
   const userData = await userResponse.data

   const userPost = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
   const userPostData = await userPost.data
   const result = {
      userData,
      userPostData
   }
   return console.log(result);;
  } catch (error) {
   console.error('Error fetching data:', error);
  }
}

export default getData;