import { Button } from "flowbite-react"
import { AiFillGoogleCircle } from "react-icons/ai"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { app } from "../firebase.js";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
   const auth = getAuth(app);
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const handleGoogleClick = async () => {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      try {
         const result = await signInWithPopup(auth, provider)
         const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               name: result.user.displayName,
               email: result.user.email,
               googlePhotoUrl : result.user.photoURL,
            })
         })
         const data = await res.json()
         if(res.ok) {
            dispatch(signInSuccess(data))
            navigate('/')
            toast.success("User logged in successfully")
         }
      } catch (error) {
         toast.error("Couldn't Authorized with Google");
      }
   }
  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  )
}

export default OAuth