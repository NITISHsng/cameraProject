'use client';

import React, { useState } from 'react';

export default function DependencySelector() {
  // Dependency objects
  const camera = { name: "Camera", type: "equipment" };
  const lights = { name: "Lights", type: "equipment" };
  const mic = { name: "Microphone", type: "equipment" };
  const operator = { name: "Camera Operator", type: "staff" };
  const soundTech = { name: "Sound Technician", type: "staff" };
  const editor = { name: "Editor", type: "staff" };
  const drone = { name: "Drone", type: "equipment" };
  const streamingRig = { name: "Streaming Rig", type: "equipment" };
  const albumDesigner = { name: "Album Designer", type: "staff" };

  // Services
  const services = [
    { key: "photography", label: "Photography", required: [camera, lights, operator] },
    { key: "videography", label: "Videography", required: [camera, mic, operator] },
    { key: "light", label: "Light", required: [lights] },
    { key: "sound-system", label: "Sound System", required: [mic, soundTech] },
    { key: "live-streaming", label: "Live Streaming", required: [camera, mic, streamingRig, operator] },
    { key: "drone-coverage", label: "Drone Coverage", required: [drone, operator] },
    { key: "photo-album", label: "Photo Album", required: [albumDesigner] },
    { key: "video-editing", label: "Video Editing", required: [editor] },
    { key: "music-video", label: "Music Video", required: [camera, mic, lights, operator, editor] },
    { key: "wedding-outdoor", label: "Wedding Outdoor", required: [camera,lights, mic, soundTech] }
  ];

  const [selected, setSelected] = useState([]);

  // Toggle selected services
  const toggleService = (key) => {
    setSelected(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  // Collect required dependencies
  const requiredDeps = services
    .filter(service => selected.includes(service.key))
    .flatMap(service => service.required);

  // Remove duplicates
  const uniqueDeps = Array.from(
    new Map(requiredDeps.map(dep => [dep.name, dep])).values()
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Select Services</h1>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {services.map(service => (
          <button
            key={service.key}
            onClick={() => toggleService(service.key)}
            className={`border rounded-xl p-3 text-left transition ${
              selected.includes(service.key)
                ? 'bg-blue-600 text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {service.label}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Required Dependencies</h2>
      {uniqueDeps.length > 0 ? (
        <ul className="list-disc pl-6">
          {uniqueDeps.map(dep => (
            <li key={dep.name}>
              {dep.name} <span className="text-sm text-gray-500">({dep.type})</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No services selected.</p>
      )}
    </div>
  );
}
