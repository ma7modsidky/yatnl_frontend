import React from 'react'
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { Card, Breadcrumb , Spinner} from "flowbite-react/lib/esm/components";
import LeaderCardBox from '../../components/Dashboard/LeaderCardBox';

function Leaders() {
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
        <div className="m-2">
          <Breadcrumb className="my-2">
            <Breadcrumb.Item href="#">
              <Link to="/dashboard">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Your Leaders</Breadcrumb.Item>
          </Breadcrumb>
          <Card>
            <div className=" flex items-center justify-between min-w-[280px]">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Your Leaders ({leaders.length})
              </h5>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {leaders && leaders.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {leaders.map((leader, index) => (
                      // <LeaderCardFull key={index} leader={leader} />
                      <LeaderCardBox key={index} leader={leader} />
                    ))}
                  </div>
                ) : (
                  <div>You havent created any leaders</div>
                )}
              </ul>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}

export default Leaders