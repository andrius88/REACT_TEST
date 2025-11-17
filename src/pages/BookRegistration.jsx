

function BookRegistration({ getBooks }) {



  return (
    <>
      <h1>Book registration</h1>
      <form className="shadow">
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="border my-2"
          />
        </div>
        <div>
          <label htmlFor="lastname">First name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="border my-2"
          />
        </div>
        <div>
          <label htmlFor="age">Posts</label>
          <input
            type="number"
            name="age"
            id="age"
            className=" border mx-2"
          />
        </div>
        <div>
          <label htmlFor="gender">First name</label>
          <input
            type="text"
            name="gender"
            id="gender"
            className="border my-2"
          />
        </div>

        <input
          type="submit"
          value="Add User"
          className="bg-blue-400"
        />
        
      </form>
    </>
  );
}

export default BookRegistration;
