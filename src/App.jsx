/* eslint-disable react/no-unescaped-entities */
function App() {
  return (
    <div>
      <div className="flex max-w-[425px] flex-col items-center justify-center md:flex md:max-w-[1440px] md:flex-row">
        <div className="-left-40 my-0 flex h-[219px] w-full flex-col bg-image-mobile bg-contain bg-no-repeat md:relative md:-top-0 md:left-0 md:h-screen md:w-[964px] md:bg-image-desktop md:bg-contain md:bg-no-repeat">
          <div className="relative left-28 top-10 flex flex-col text-[36px] font-bold uppercase leading-[43.57px] text-[#FFFFFF]">
            Get your <span>dream job </span>
          </div>
          <div className="relative left-28 top-14 text-[16px] font-bold leading-[19.36px] text-[#03121E]">
            Let's get your dream job with Spotjob
          </div>
        </div>

        <div className="">
          <div className="mx-auto my-0 flex w-[310px] flex-col items-center justify-center gap-[20px] md:mx-auto md:flex md:max-h-[768px] md:w-[490px] md:items-center md:justify-center md:whitespace-nowrap">
            <div className="mt-10 flex flex-col gap-3 text-center">
              <h2 className="text-[32px] font-semibold leading-[38.73px] text-black md:font-medium">
                Sign Up
              </h2>
              <p className="text-[16px] font-normal leading-[19.36px] text-gray-400">
                Already have an account?{" "}
                <span className="text-[16px] font-normal leading-[19.36px] text-blue-500">
                  Sign in
                </span>
              </p>
            </div>
            <form>
              <div className="gap-4">
                <div className="mb-3 flex flex-col gap-3">
                  <label className="text-[12px] font-medium leading-[14.52px] text-[#242424]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    className="w-full rounded-lg border border-stone-200 px-5 py-3 placeholder:capitalize placeholder:text-gray-400"
                  />
                </div>
                <div className="mb-3 flex flex-col gap-3">
                  <label className="leading-[14.52px]text-[#242424] text-[12px] font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="w-full rounded-lg border border-[#817B7B] px-5 py-3 placeholder:capitalize placeholder:text-[#817B7B]"
                  />
                </div>
                <div className="md:flex md:justify-between md:gap-5">
                  <div className="mb-3 flex flex-col gap-3">
                    <label className="text-[12px] font-medium leading-[14.52px] text-[#242424]">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="create a password"
                      className="border-#817B7B placeholder:text-#817B7B w-full rounded-lg border px-5 py-3 placeholder:capitalize"
                    />
                  </div>
                  <div className="mb-3 flex flex-col gap-3">
                    <label className="text-[12px] font-medium leading-[14.52px] text-stone-900">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      placeholder="confirm password"
                      className="border-#817B7B placeholder:text-#817B7B w-full rounded-lg border px-5 py-3 placeholder:capitalize"
                    />
                  </div>
                </div>
              </div>

              <div className="px-10 py-5">
                <p className="text-center text-[12px] font-medium leading-[14.52px] text-gray-500">
                  By creating an account you agree to the{" "}
                  <span className="text-blue-400">Terms of Use</span> and{" "}
                  <span className="text-blue-400">Privacy Policy</span>
                </p>
              </div>

              <div>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1172Ff] px-10 py-5 text-[12px] font-bold leading-[14.52px] text-[#ffffff]">
                  <img src="/sign-in.png" alt="sign-in-icon" />
                  Sign up
                </button>
              </div>

              <div className="my-3 flex flex-row items-center justify-between px-6">
                <span className="h-[1px] w-full bg-[#242424]"></span>
                <span className="mx-3 text-[12px] font-bold text-[#817B7B]">
                  or
                </span>
                <span className="h-[1px] w-full bg-[#242424]"></span>
              </div>

              <div>
                <div>
                  <button className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#1172FF] px-10 py-5 text-[12px] font-bold leading-[14.52px] text-[#2F2D2D]">
                    <img src="/google.png" alt="google-icon" />
                    Sign in with Google
                  </button>
                </div>
                <div>
                  <button className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#1172FF] px-10 py-5 text-[12px] font-bold leading-[14.52px] text-[#2F2D2D]">
                    <img src="/facebook.png" alt="facebook-icon" />
                    Sign in with Facebook
                  </button>
                </div>
                <div>
                  <button className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#1172FF] px-10 py-5 text-[12px] font-bold leading-[14.52px] text-[#2F2D2D]">
                    <img src="/apple.png" alt="apple-icon" />
                    Continue with Apple ID
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
