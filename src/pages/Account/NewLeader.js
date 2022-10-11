
import React, { useState, useContext, } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import AuthContext from "../../context/AuthContext";


function NewLeader() {
  let { user } = useContext(AuthContext);
  const LEADER_TYPES = {
    a: (
      <span class="bg-amber-300 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
        GOLD
      </span>
    ),
    b: (
      <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        SILVER
      </span>
    ),
    c: (
      <span class="bg-amber-600 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        BRONZE
      </span>
    ),
  };
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    uuid: "",
    leader_type: "c",
  });
  const [formData, updateFormData] = useState(initialFormData);
  const [parent, setParent] = useState({'parent':null ,'dataReturned':false});
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };
  const handleCheck = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`leader/?uuid=${formData.uuid}`)
      .then((res) => {
        if (res.data.length === 0 ){
          setParent({ ...parent, 'parent': null , 'dataReturned':true })
        }
        if (res.data.length === 1) {
          
          setParent({ ...parent, parent: res.data[0], dataReturned: true });
          updateFormData({
            ...formData,
            leader_type: res.data[0].leader_type,
          });
        }
        console.log(res.data)
        console.log(parent);
      })
      .catch((err) => {
        console.log(err);
        setParent({ ...parent, 'parent': null, 'dataReturned': true });
      });
  };

  const Clear = (e) => {
    e.preventDefault()
    console.log('clear')
    updateFormData({
      ...formData,
      uuid: "",
      leader_type: "",
    });
    setParent({ parent: null, dataReturned: false });
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log("submit");
    console.log("DATA",formData)
    console.log("PARENT", parent);
    let fdata = new FormData();
    fdata.append("leader_type", formData.leader_type);
    fdata.append("main_account", user.user_id);
    // && parent.parent.is_eligible
    if (parent.parent ){
      fdata.append("parent", parent.parent.id);
      fdata.append("parent_relation_numbre", parent.parent.get_next_relation);
    }
    // console.log('form data ==>', fdata.entries )
    axiosInstance
    .post("leader/",fdata)
    .then(res=>{
            console.log(res)
            navigate("/dashboard", { replace: true });
            alert(
              "You have successfully created a new leader "
            );
        })
    .catch(err => {
        console.log(err);
        alert(err.response.data);
    });
  }
  return (
    <div className="p-4 max-w-[700px] mx-auto">
      <form className="flex flex-col gap-4">
        <div class="mb-3">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-secondary dark:text-gray-300"
          >
            Referal ID
          </label>
          <div className="flex gap-2">
            <input
              onChange={handleChange}
              value={formData.uuid}
              name="uuid"
              type="text"
              id="ref_id"
              placeholder="Ex: xeTZskVKR"
              class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-primary dark:focus:border-secondary"
            />
            <button
              onClick={handleCheck}
              class="group relative w-20 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              Check
            </button>
            <button
              onClick={Clear}
              class="group w-20 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
            >
              Clear
            </button>
          </div>
          {!parent.dataReturned ? (
            <div>please check the referal if you want to support them</div>
          ) : (
            <div className="py-2">
              {parent.parent ? (
                <>
                  <span className="text-green-400">
                    {LEADER_TYPES[parent.parent.leader_type]}
                    Leader{" "}
                    <span className="text-green-600 font-bold">
                      {parent.parent.main_account.user_name}
                    </span>{" "}
                    {parent.parent.is_eligible?
                    <span className="text-green-600 font-bold">
                      is Eligble
                    </span>:
                    <span className="text-red-600 font-bold">
                      is Not Eligble
                    </span>
                    }
                    
                  </span>
                </>
              ) : (
                <span className="text-red-600">User is not correct</span>
              )}
            </div>
          )}
        </div>

        <div class="mb-3">
          <label
            for="leader_type"
            class="block mb-2 text-sm font-medium text-secondary dark:text-secondary"
          >
            Or Select your Leader type
          </label>
          <select
            disabled={parent.dataReturned}
            id="leader_type"
            name="leader_type"
            value={formData.leader_type}
            onChange={handleChange}
            class="bg-gray-50 border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-secondary dark:focus:border-secondary"
          >
            <option value="c">Bronze 500$</option>
            <option value="b">Silver 1500$</option>
            <option value="a">Gold 4900$</option>
          </select>
        </div>

        <div>
          <button
            onClick={handleSubmit}
            type="submit"
            class="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          >
            {/* <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-orange-300 group-hover:text-secondary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span> */}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewLeader