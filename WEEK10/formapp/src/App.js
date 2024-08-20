import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col mt-7 w-[45%] mx-auto">
      <form onSubmit={submitHandler} className="">
        <label htmlFor="firstName" className="font-semibold">
          First name
        </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Ahmar"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        />

        <br />
        <label htmlFor="lastName" className="font-semibold">
          Last name
        </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Faraz"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        />

        <br />
        <label htmlFor="email" className="font-semibold">
          Email Address
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ahmar@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        />

        <br />
        <label htmlFor="country" className="font-semibold">
          Country
        </label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        >
          <option>India</option>
          <option>Pakistan</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress" className="font-semibold">
          Street Address
        </label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        />

        <br />
        <label htmlFor="city" className="font-semibold">
          City
        </label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Patna"
          value={formData.city}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        />

        <br />
        <label htmlFor="state" className="font-semibold">
          State / Province
        </label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        />

        <br />
        <label htmlFor="postalCode" className="font-semibold">
          Postal Code
        </label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline outline-black/30 min-w-full rounded-sm mt-2 mb-1"
        />

        <fieldset className="mt-1">
          <legend className="font-semibold mb-3">By Email</legend>

          <div className="flex items-baseline gap-3 mb-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />

            <div className="flex flex-col">
              <label htmlFor="comments" className="font-semibold opacity-70">
                Comments
              </label>
              <p className="font-medium opacity-40">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-3 mb-2">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates" className="font-semibold opacity-70">
                Candidates
              </label>
              <p className="font-semibold opacity-40">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers" className="font-semibold opacity-70">
                Offers
              </label>
              <p className="font-semibold opacity-40">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </fieldset>




        <fieldset className="mt-3 mb-4">

          <legend className="font-semibold">Push Notifications</legend>
          <p className="font-semibold opacity-40 mb-3">
            These are delivered via SMS to your mobile phone.
          </p>

          <div className="mb-2 flex gap-3">
            <input
              name="pushNotifications"
              type="radio"
              id="pushEverything"
              onChange={changeHandler}
              value="Everything"
            />

            <label htmlFor="pushEverything" className="font-semibold opacity-70">
              Everything
            </label>
          </div>

          <div className="mb-2 flex gap-3">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
            />
            <label htmlFor="pushEmail" className="font-semibold opacity-70">
              Same as email
            </label>
          </div>

          <div className="mb-2 flex gap-3">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
            />

            <label htmlFor="pushNothing" className="font-semibold opacity-70">
              No Push Notifications
            </label>
          </div>


        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 mb-11">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
