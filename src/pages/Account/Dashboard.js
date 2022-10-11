import React from 'react'
import {  Card } from 'flowbite-react/lib/esm/components';
import avatar from "../../assets/images/profile_avatar.png";
import AuthContext from "../../context/AuthContext";
import { useContext, useState, useEffect } from 'react';
import axiosInstance from "../../axios";
import { Spinner, Button } from 'flowbite-react/lib/esm/components';
import LeaderCard from '../../components/Dashboard/LeaderCard';
import { Link } from "react-router-dom";

function Dashboard() {
  let { user } = useContext(AuthContext);
  const [data, setData] = useState({ leaders: [], dataIsReturned: false });
  useEffect(() => {
    axiosInstance
      .get(`leader/?main_account=${user.user_id}`)
      .then((res) => {
        setData({
          leaders: res.data,
          dataIsReturned: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setData({ leaders: [], dataIsReturned: false });
      });
    console.log(data);
  }, [data.dataIsReturned, user.user_id]);
  const { dataIsReturned, leaders } = data;
  return (
    <>
      {!dataIsReturned ? (
        <div className="flex flex-wrap items-center gap-2">
          <div className="m-auto my-4">
            <Spinner
              aria-label="Center-aligned spinner example"
              size="lg"
              color="failure"
            />
          </div>
        </div>
      ) : (
        <div className="p-4 flex flex-wrap gap-2 items-start text-center justify-center">
          {/* first Div Profile */}
          <div class="flex flex-col gap-2 sm:w-full md:w-auto">
            {/* profile */}
            <Card>
              <div class="photo-wrapper p-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src={avatar}
                  alt={user.user_name}
                ></img>
              </div>
              <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                  {user.username}
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>{user.email}</p>
                </div>
                <table class="text-xs my-3 text-left">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Leaders
                      </td>
                      <td class="px-2 py-2">{leaders.length}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Followers
                      </td>
                      <td class="px-2 py-2">0</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Total earnings
                      </td>
                      <td class="px-2 py-2">0 $</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Phone
                      </td>
                      <td class="px-2 py-2">{user.phone}</td>
                    </tr>
                  </tbody>
                </table>

                {/* <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a>
            </div> */}
              </div>
            </Card>

            {/* options */}
            <Card>
              <div className="mb-4 flex items-center justify-between min-w-[280px]">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Options
                </h5>
              </div>
              <div className="flex flex-col gap-2">
                <Button color="light">
                  <Link to="/Leaders">Leaders</Link>
                </Button>

                <Button color="light">
                  <Link to="/NewLeader">New Leader</Link>
                </Button>

                <Button color="light">
                  <Link to="/NewLeader">Invite a Friend</Link>
                </Button>

                <Button color="light">Earnings</Button>
                <Button color="failure">Logout</Button>
              </div>
            </Card>
          </div>
          {/* second div leader and options */}
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="max-w-sm">
              <Card>
                <div className="mb-4 flex items-center justify-between min-w-[280px]">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Your Leaders
                  </h5>
                  <Link
                    to="/Leaders"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    All leaders
                  </Link>
                </div>
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {leaders && leaders.length > 0 ? (
                      <div>
                        {/* .slice(0, 4) */}
                        {leaders.map((leader, index) => (
                          <LeaderCard key={index} leader={leader} />
                        ))}
                      </div>
                    ) : (
                      <div>You havent created any leaders</div>
                    )}
                  </ul>
                </div>
              </Card>
            </div>

            {/* <div className="max-w-sm">
          <Card>
            <div className="mb-4 flex items-center justify-between min-w-[280px]">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Your Followers
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <div className="h-8 w-8 rounded-full bg-amber-600 "></div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Neil Sims
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        Level 1
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $320
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Bonnie Green
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $3467
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Michael Gough
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $67
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        alt="Lana image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Lana Byrd
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $367
                    </div>
                  </div>
                </li>
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Thomas image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Thomes Lean
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2367
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard