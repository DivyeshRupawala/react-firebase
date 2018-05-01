
const userRef = window.db.collection('users');

export const signUpUserApi = async (obj) => {
  const userObj = obj;
  try {
    const response = await userRef.add(userObj);    
    const id = response.id;
    const data = {...obj,id};   
    return data;
  } catch(e) {

  }  
}

export const getSignedUpUsers = async () => { 
  try {
    const response = await userRef.get();
    let data = [];
    response.forEach(doc => {       
        data.push(doc.data());
    });                    
   
    return data;
  } catch(e) {

  }
}
