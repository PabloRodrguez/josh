"use client"; // Marca este componente como un Client Component

import { useState } from "react";
import Button from "./components/ui/button"; // Importación del componente Button

export default function PluginInterface() {
  const [knobValues, setKnobValues] = useState({ k1: 50, k2: 50, k3: 50, k4: 50, k5: 50 });
  const [activeKnob, setActiveKnob] = useState(null);

  const handlePointerMove = (event) => {
    if (!activeKnob) return; // Si no hay un knob activo, no hacer nada

    // Calcula el nuevo valor del knob basado en el movimiento del mouse
    setKnobValues((prev) => ({
      ...prev,
      [activeKnob]: Math.max(0, Math.min(100, prev[activeKnob] - event.movementY * 0.5)),
    }));
  };

  const handlePointerDown = (knob) => {
    setActiveKnob(knob); // Establece el knob activo
    window.addEventListener("pointermove", handlePointerMove); // Escucha el movimiento del mouse
    window.addEventListener("pointerup", handlePointerUp, { once: true }); // Escucha cuando se suelta el clic
  };

  const handlePointerUp = () => {
    setActiveKnob(null); // Desactiva el knob
    window.removeEventListener("pointermove", handlePointerMove); // Deja de escuchar el movimiento del mouse
  };

  return (
    <div className="w-full h-[300px] bg-gray-900 p-4 flex" onPointerUp={handlePointerUp}>
      {/* Sección 2/3 con 4 knobs */}
      <div className="w-2/3 grid grid-cols-2 gap-6 relative">
        {["k1", "k2", "k3", "k4"].map((knob, index) => (
          <div key={knob} className="relative flex flex-col items-center">
            {(index === 0 || index === 3) && (
              <Button className="absolute -top-8 w-10 h-6 bg-blue-500 rounded-full shadow-md" />
            )}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer shadow-lg border-4 border-gray-500 bg-gray-800"
              style={{ background: "radial-gradient(circle, #444 30%, #222)" }}
              onPointerDown={() => handlePointerDown(knob)} // Activa el knob al hacer clic
            >
              <div
                className="w-2 h-10 bg-white rounded-full shadow-md"
                style={{ transform: `rotate(${knobValues[knob] * 2.7}deg)` }} // Gira el knob según su valor
              />
            </div>
          </div>
        ))}
      </div>

      {/* Sección 1/3 con un solo knob e imagen */}
      <div className="w-1/3 flex items-center justify-center">
        <div
          className="w-24 h-24 bg-cover bg-center rounded-full flex items-center justify-center border-4 border-gray-500 shadow-lg"
          style={{ backgroundImage: "url('/path-to-your-image.png')" }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer shadow-lg border-4 border-gray-500 bg-gray-800"
            style={{ background: "radial-gradient(circle, #444 30%, #222)" }}
            onPointerDown={() => handlePointerDown("k5")} // Activa el knob al hacer clic
          >
            <div
              className="w-2 h-10 bg-white rounded-full shadow-md"
              style={{ transform: `rotate(${knobValues.k5 * 2.7}deg)` }} // Gira el knob según su valor
            />
          </div>
        </div>
      </div>
    </div>
  );
}