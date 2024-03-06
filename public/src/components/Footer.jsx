import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  const history = useHistory()
  const handleClick = () =>{
    history.push('register')
  }
  return (
      <footer class="text-center text-white  navbar ">
        <div class="container p-4 pb-0">
          <section class="w-100">
            <p class="d-flex justify-content-center align-items-center">
              <span class="me-3">Register for free</span>
              <button
                data-mdb-ripple-init
                type="button"
                class="btn btn-outline-light btn-rounded"
                onClick={() => handleClick()}
              >
                Sign up!
              </button>
            </p>
          </section>
        </div>

        <div
          class="text-center p-3 w-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a class="text-white" href="https://www.linkedin.com/in/alielgohary/">
            AliElgohary
          </a>
        </div>
      </footer>
    
  );
}
