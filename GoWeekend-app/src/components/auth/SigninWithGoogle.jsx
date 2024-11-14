import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

function SignInwithGoogle() {
    function googleLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(async (result) => {
        console.log(result);
        const user = result.user;
        if (result.user) {
          alert('Sign in successfull')
          localStorage.setItem('idToken','true')
          window.location.href = "/";
        }
      });
    }
    return (
      <div>
        <p className="para">--Or continue with--</p>
        <div
          style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
          onClick={googleLogin}
        >
          <img src='google.png' width={"60%"} />
        </div>
      </div>
    );
  }
  export default SignInwithGoogle;