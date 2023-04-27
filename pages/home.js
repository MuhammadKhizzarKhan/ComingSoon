import React from 'react'

const home = () => {
  return (
    <div>
       <div class="popform">
                  <form
                    id="pfy_signup_form"
                    action="/test.html"
                    method="post"
                    novalidate
                  >
                    <div class="form-group">
                      <input
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        type="text"
                        class="form-control"
                        // id="exampleInputtext"
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        // id="exampleInputtext"
                        name="email"
                        id="email"
                        autoComplete="email"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      id="btn-joinbeta"
                    >
                      Join Beta
                    </button>
                  </form>
                  <p>
                    By signing up, you agree to our <u>Policy</u> and{" "}
                    <u>Terms of Service</u>
                  </p>
                </div>

    </div>
  )
}

export default home
