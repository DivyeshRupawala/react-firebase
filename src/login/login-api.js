
const userRef = window.db.collection('users');

export const onLogin = async (obj) => {
  try {
    const response = await userRef.where("email", "==", obj.email).where("password", "==", obj.password).get();    
    return response;
  } catch(e) {

  }  
}