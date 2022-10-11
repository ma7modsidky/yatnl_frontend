import React from 'react'

function LeaderCard({leader}) {
 const LEADER_TYPES = {
   a: (
     <span class="bg-amber-300 text-amber-800 text-sm font-medium mr-2 px-2.5 py-2.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
       GOLD
     </span>
   ),
   b: (
     <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-2.5 rounded dark:bg-gray-700 dark:text-gray-300">
       SILVER
     </span>
   ),
   c: (
     <span class="bg-amber-600 text-amber-800 text-sm font-medium mr-2 px-2.5 py-2.5 rounded dark:bg-gray-700 dark:text-gray-300">
       BRONZE
     </span>
   ),
 };
  return (
    <li className="py-3 sm:py-4 border-b">
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          {/* <div className="h-8 w-8 rounded-full bg-amber-600" /> */}
          {LEADER_TYPES[leader.leader_type]}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            LEVEL 1
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {leader.uuid}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            View
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${leader.points}
        </div>
      </div>
    </li>
  );
}

export default LeaderCard