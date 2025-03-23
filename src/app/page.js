"use client";

import { useState } from "react";
import { Knob } from "primereact/knob";
import { Button } from "primereact/button";

export default function PluginInterface() {
  const [knobs, setKnobs] = useState({
    k1: -6,
    k2: -6,
    k3: -6,
    k4: -6,
    k5: -6,
  });

  const [sliders, setSliders] = useState({
    s1: false,
    s2: false,
  });

  return (
    <div className="w-full h-[300px] bg-gray-900 p-4 flex gap-4">
      {/* Sección 2/3 con 4 knobs en matriz 2x2 */}
      <div className="w-2/3 grid grid-rows-2 grid-cols-2 gap-6 relative">
        {/* Knob 1 con slider */}
        <div className="flex flex-col items-center">
          <Button
            className={`mb-2 w-14 h-6 rounded-full transition-colors ${
              sliders.s1 ? "bg-green-500" : "bg-gray-600"
            }`}
            onClick={() => setSliders((prev) => ({ ...prev, s1: !prev.s1 }))}
          />
          <Knob
            value={knobs.k1}
            onChange={(e) => setKnobs({ ...knobs, k1: e.value })}
            min={-12}
            max={0}
          />
        </div>

        {/* Knob 2 */}
        <div className="flex flex-col items-center">
          <Knob
            value={knobs.k2}
            onChange={(e) => setKnobs({ ...knobs, k2: e.value })}
            min={-12}
            max={0}
          />
        </div>

        {/* Knob 3 */}
        <div className="flex flex-col items-center">
          <Knob
            value={knobs.k3}
            onChange={(e) => setKnobs({ ...knobs, k3: e.value })}
            min={-12}
            max={0}
          />
        </div>

        {/* Knob 4 con slider */}
        <div className="flex flex-col items-center">
          <Button
            className={`mb-2 w-14 h-6 rounded-full transition-colors ${
              sliders.s2 ? "bg-green-500" : "bg-gray-600"
            }`}
            onClick={() => setSliders((prev) => ({ ...prev, s2: !prev.s2 }))}
          />
          <Knob
            value={knobs.k4}
            onChange={(e) => setKnobs({ ...knobs, k4: e.value })}
            min={-12}
            max={0}
          />
        </div>
      </div>

      {/* Sección 1/3 con un solo knob e imagen */}
      <div className="w-1/3 flex items-center justify-center">
        <div
          className="w-24 h-24 bg-cover bg-center rounded-full flex items-center justify-center border-4 border-gray-500 shadow-lg"
          style={{ backgroundImage: "url('/path-to-your-image.png')" }}
        >
          <Knob
            value={knobs.k5}
            onChange={(e) => setKnobs({ ...knobs, k5: e.value })}
            min={-12}
            max={0}
          />
        </div>
      </div>
    </div>
  );
}
