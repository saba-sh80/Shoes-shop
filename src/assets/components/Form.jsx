function Form() {
  return (
    <div className="w-135 h-100 border border-gray-200 rounded-sm">
      <form action="" className="flex flex-col gap-y-7 justify-center items-center">
        <p className="text-3xl text-center mt-12 font-bold text-gray-200">
          Login form
        </p>
        <input
          type="text"
          placeholder="Enter your username"
          className="border border-gray-200 rounded-lg w-108 h-12 placeholder:text-gray-200"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
          className="border border-gray-200 rounded-lg w-108 h-12 placeholder:text-gray-200"
        />
        <button className="w-32 h-12 text-2xl border border-gray-200 rounded-lg cursor-pointer text-gray-200">
          Login
        </button>
        <div className="flex flex-col gap-y-1">
          <a href="#" className="text-center text-gray-500">
            Create an account
          </a>
          <a href="#" className="text-center text-gray-500">
            Forget password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Form;
