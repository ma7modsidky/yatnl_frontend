import React from 'react'
import avatar from "../../assets/images/profile_avatar.png";
import { Tooltip, Button } from 'flowbite-react';
function LeaderCardBox({leader}) {
 const LEADER_TYPES = {
   a: (
     <Tooltip content="Up to 5 Levels of followers and 21,700 of Revenue" style="light">
       <div class="bg-amber-300 text-amber-800 text-sm font-medium  px-2.5 py-2.5 rounded dark:bg-yellow-200 dark:text-yellow-900 max-w-[4rem] m-auto">
         GOLD
       </div>
     </Tooltip>
   ),
   b: (
     <div class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-2.5 rounded dark:bg-gray-700 dark:text-gray-300 max-w-[4rem] m-auto">
       SILVER
     </div>
   ),
   c: (
     <div class="bg-amber-600 text-amber-800 text-sm font-medium  px-2.5 py-2.5 rounded dark:bg-gray-700 dark:text-gray-300 max-w-[4rem] m-auto">
       BRONZE
     </div>
   ),
 };
 

 const CHILDREN_BOXES = {
   1: (
     <div className="  flex items-center justify-center">
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-green-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
     </div>
   ),
   2: (
     <div className="  flex items-center justify-center">
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-green-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-red-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
     </div>
   ),
   3: (
     <div className="  flex items-center justify-center">
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-green-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-red-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-green-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
     </div>
   ),
   4: (
     <div className="  flex items-center justify-center">
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-green-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-red-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-green-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
       <div class="photo-wrapper p-2">
         <img
           class="w-6 h-6 rounded-full mx-auto border-2 border-red-500"
           src={avatar}
           alt="child"
         ></img>
       </div>
     </div>
   ),
 };
  return (
    <div className="py-3 sm:py-4 border border-gray-400 imary rounded-md ">
      <div className="items-center">
        <div className="shrink-0">
          {LEADER_TYPES[leader.leader_type]}
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {leader.uuid}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            Created ({leader.created})
          </p>
        </div>

        {/* level 1 */}
        <Tooltip
          content="Level 1 / Direct children , you get bonus from number 1 and 3 (green color)"
          style="light"
        >
          {leader.children_count > 0 ? (
            CHILDREN_BOXES[leader.children_count]
          ) : (
            <div className="text-gray-500 min-h-[40px] flex justify-center">
              <p className="align-middle">No Direct Children</p>
            </div>
          )}
        </Tooltip>

        {/* Other levels */}
        <Tooltip
          content="Indirect children every number 2 and 4 from your children number 1 and 3"
          style="light"
        >
          <div className="  flex items-center justify-center">
            {/* <div className="text-gray-500">Other Levels: 5 X</div> */}
            <div className="text-gray-500">{leader.bonus_from.length} X</div>
            <div class="photo-wrapper p-2">
              <img
                class="w-6 h-6 rounded-full mx-auto border-2 border-green-500"
                src={avatar}
                alt="child"
              ></img>
            </div>
          </div>
        </Tooltip>

        {/* Leader Credit and Revenue */}
        <div className="m-auto text-sm text-gray-500 flex justify-between">
          <p className="p-3">
            <span>Revenue: </span>
            <span className="text-primary font-bold">75$</span>
          </p>
          {/* <p className="p-3">
            <span>Withdrawn: </span>
            <span className="text-primary font-bold">75$</span>
          </p> */}
          <p className="p-3">
            <span>Balance</span>:{" "}
            <span className="text-secondary font-bold">{leader.points}$</span>
          </p>
        </div>

        {/* Options */}
        <div className=" text-gray-500 flex justify-between px-3">
          {/* <Button.Group> */}
          <Button color="gray" className="p-3">
            Details
          </Button>
          <Button color="gray">Withdraw</Button>
          <Button color="gray">Invite a friend</Button>

          {/* </Button.Group> */}
        </div>
      </div>
    </div>
  );
}

export default LeaderCardBox