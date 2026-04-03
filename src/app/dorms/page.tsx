"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DormBuilding } from "./DormBuilding"
import { QueryDatabase } from "./query_database";

const db = new QueryDatabase();

export default function Home() {

  const [selectedYears, setSelectedYears] = useState<Set<string>>(new Set());
  const [selectedRoomTypes, setSelectedRoomTypes] = useState<Set<string>>(new Set());
  const [dorms, setDorms] = useState<DormBuilding[]>([]);

  useEffect(() => {
    const fetchDorms = async () => {
      const payload: Record<string, unknown> = {};
      if (selectedYears.size === 1) {
        payload.years = [...selectedYears][0];
      }
      const results = await db.query_database(payload);
      setDorms(results);
    };
    fetchDorms();
  }, [selectedYears]);

  const displayedDorms = selectedRoomTypes.size === 0 ? dorms : dorms.filter((dorm) => {
    const roomTypes = dorm.get_attributes()?.get("room_types") ?? [];
    return roomTypes.some((rt: any) =>
      selectedRoomTypes.has(rt.get_attributes()?.get("room_type"))
    );
  });

  function toggleYear(year: string) {
    setSelectedYears((prev) => {
      const next = new Set(prev);
      next.has(year) ? next.delete(year) : next.add(year);
      return next;
    });
  }

  function toggleRoomType(roomType: string) {
    setSelectedRoomTypes((prev) => {
      const next = new Set(prev);
      next.has(roomType) ? next.delete(roomType) : next.add(roomType);
      return next;
    });
  }

  // toggle ac
  /*
  function toggleAC(ac: string) { // should be bool
    setSelectedAC((prev) => {
    })
  }
  */



  return (
    <main className="flex flex-col min-h-screen">
      {/* this goes behind the header so it doesn't look like whitespace */}
      <div className="h-18 bg-black flex">

      </div>

      <div className="flex flex-1">
        {/* sidebar, where the filter is located */}
        <div className="w-1/6 bg-gray-800 text-white p-4 py-8">
          <h2 className="text-center text-xl font-bold mb-4">
            Filter Options
          </h2>

          {/* list of filter options */}
          <p className="text-center text-lg my-4">Year</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" checked={selectedYears.has("Freshman")} onChange={() => toggleYear("Freshman")} />
              <p>Freshmen</p>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" checked={selectedYears.has("Sophomore")} onChange={() => toggleYear("Sophomore")} />
              <p>Sophomore</p>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" checked={selectedYears.has("Junior, Senior, Co-term")} onChange={() => toggleYear("Junior, Senior, Co-term")} />
              <p>Junior, Senior, Co-term</p>
            </li>
          </ul>

          <div className="h-px bg-white my-4"></div>

          <p className="text-center text-lg my-4">Room Type</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" checked={selectedRoomTypes.has("Single")} onChange={() => toggleRoomType("Single")} />
              <p>Single</p>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" checked={selectedRoomTypes.has("Double")} onChange={() => toggleRoomType("Double")} />
              <p>Double</p>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" checked={selectedRoomTypes.has("Triple")} onChange={() => toggleRoomType("Triple")} />
              <p>Triple</p>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" checked={selectedRoomTypes.has("Suite")} onChange={() => toggleRoomType("Suite")} />
              <p>Suite</p>
            </li>
          </ul>
        </div>

        {/* dorm list main body */}
        <div className="w-5/6 bg-gray-100 p-6 space-y-4">
          <h1 className="text-center text-4xl font-bold">
            Dorms
          </h1>

          {/* dorm list */}
          <ul className="space-y-4">
            {displayedDorms.map((dorm, index) => (
              <li key={index}>
                <Link href="#">
                  <div className="flex p-4 bg-gray-400 rounded space-x-4 hover:bg-gray-500">
                    {/* image element */}
                    <img src="/fieldrpi.jpg" alt="86 field" className="w-48 h-48 object-cover rounded" />

                    {/* text elements */}
                    <div className="flex flex-col w-full space-y-4">
                      <div className="text-lg font-bold underline">
                        Dorm: {dorm.get_dorm_name()}
                      </div>

                      {/* attributes and tags */}
                      <div className="grid grid-cols-3 gap-4">
                        <p>Nearest dining hall: {dorm.get_attributes()?.get("nearest_dining_hall") ?? "—"}</p>
                        <p>A/C: {dorm.get_amenities()?.get("air_conditioning") ? "Yes" : "No"}</p>
                        <p>Elevator: No</p>
                      </div>

                      <p className="font-bold">Tags: ethernet, bike rack, elevator</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}