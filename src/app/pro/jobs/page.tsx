"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Jobs() {
  const [filterJobs, setFilterJobs] = useState<string>("All Jobs");
  const [orderedJobs, setOrderedJobs] = useState<string>("Recent Activity");

  return (
    <>
      <section className="container mx-auto lg:px-12 px-3 pt-5 text-sm flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row gap-2 md:items-center flex-1">
          <div className="flex items-center w-full ">
            <input
              type="text"
              placeholder="Search Jobs"
              className="px-3 py-1.5 rounded-l-md focus:outline-none border focus:border-blue-500 flex-1"
            />
            <button className=" w-10 border py-[9px] flex justify-center rounded-r-md hover:text-blue-500 duration-200">
              <IoSearch className="" />
            </button>
          </div>
          <div className="dropdown flex-none w-fit">
            <div
              tabIndex={0}
              role="button"
              className="m-1 bg-[#F5F5F5] px-3 rounded-md py-1 min-w-20 flex items-center"
            >
              <span>Filter By: {filterJobs}</span>{" "}
              <IoIosArrowDown className="scale-50" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
            >
              <li>
                <button onClick={(e) => setFilterJobs("All Jobs")}>
                  All Jobs
                </button>
              </li>
              <li>
                <button onClick={(e) => setFilterJobs("Completed Jobs")}>
                  Completed Jobs
                </button>
              </li>
              <li>
                <button onClick={(e) => setFilterJobs("Archived Jobs")}>
                  Archived Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => setFilterJobs("Jobs With SafePay Funds")}
                >
                  Jobs With SafePay Funds
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown w-fit">
          <div
            tabIndex={0}
            role="button"
            className="m-1 bg-[#F5F5F5] px-3 rounded-md py-1 flex items-center"
          >
            <span> {orderedJobs}</span> <IoIosArrowDown className="scale-50" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
          >
            <li>
              <button onClick={(e) => setOrderedJobs("Recent Activity")}>
                Recent Activity
              </button>
            </li>
            <li>
              <button
                onClick={(e) => setOrderedJobs("Hired Date - Descending")}
              >
                Hired Date - Descending
              </button>
            </li>
            <li>
              <button onClick={(e) => setOrderedJobs("Hired Date - Ascending")}>
                Hired Date - Ascending
              </button>
            </li>
            <li>
              <button onClick={(e) => setOrderedJobs("Job Title - A to Z")}>
                Job Title - A to Z
              </button>
            </li>
            <li>
              <button onClick={(e) => setOrderedJobs("Job Title - Z to a")}>
                Job Title - Z to A
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto lg:px-12 px-3 py-20">
        <h3 className="text-center text-sm">
          You haven{"'"}t been hired for any jobs yet. <br />{" "}
          <Link href={"#"} className="text-blue-500">
            Find jobs
          </Link>{" "}
          and apply or <Link href={"#"}>follow up</Link> on jobs you have
          already applied to.
        </h3>
      </section>
    </>
  );
}
