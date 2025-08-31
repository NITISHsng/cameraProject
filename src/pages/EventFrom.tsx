"use client";

import { useState } from "react";
import {requiredServices} from "@/contexts/fromData";
import {RequiredServices} from "@/contexts/fromType";

type SelectedServices = {
  photoservice: boolean;
  videography: boolean;
};

export default function ServiceSelector() {
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({
    photoservice: false,
    videography: false,
  });

  const [formData, setFormData] = useState<RequiredServices>({
    photoservice: {
      photoTypes: [],
      albumTypes: [],
    },
    videography: {
      videoCategory: "",
      videoType: "standard",
      videoQuality: "1080p",
      durationMinutes: 10,
      extraVideos: [],
    },
  });

  const toggleService = (service: keyof SelectedServices) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const handleMultiSelect = (
    service: keyof RequiredServices,
    field: keyof RequiredServices[keyof RequiredServices],
    values: HTMLCollectionOf<HTMLOptionElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [service]: {
        ...prev[service],
        [field]: Array.from(values).map((v) => v.value),
      },
    }));
  };

  const handleChange = <
    T extends keyof RequiredServices,
    K extends keyof RequiredServices[T]
  >(
    service: T,
    field: K,
    value: RequiredServices[T][K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [service]: {
        ...prev[service],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    const finalSelection: Partial<RequiredServices> = {};
    (Object.keys(selectedServices) as (keyof SelectedServices)[]).forEach(
      (service) => {
        if (selectedServices[service]) {
          finalSelection[service] = formData[service];
        }
      }
    );
    console.log("Final Selected Services:", finalSelection);
  };

  
  return (
    <div className="p-6 max-w-lg mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Select Services</h2>

      {/* Service Options */}
      <div className="flex gap-4">
        {(Object.keys(requiredServices) as (keyof RequiredServices)[]).map(
          (service) => (
            <button
              key={service}
              onClick={() => toggleService(service)}
              className={`px-4 py-2 rounded-lg shadow ${
                selectedServices[service]
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {service}
            </button>
          )
        )}
      </div>

      {/* Photography Options */}
      {selectedServices.photoservice && (
        <div className="p-4 border rounded-lg shadow space-y-4">
          <h3 className="font-semibold">Photography Options</h3>

          <div>
            <label className="block">Photo Types (multi-select)</label>
            <select
              multiple
              className="border rounded px-2 py-1 w-full h-24"
              onChange={(e) =>
                handleMultiSelect(
                  "photoservice",
                  "photoTypes",
                  e.target.selectedOptions
                )
              }
            >
              {requiredServices.photoservice.photoTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block">Album Types (multi-select)</label>
            <select
              multiple
              className="border rounded px-2 py-1 w-full h-24"
              onChange={(e) =>
                handleMultiSelect(
                  "photoservice",
                  "albumTypes",
                  e.target.selectedOptions
                )
              }
            >
              {requiredServices.photoservice.albumTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Videography Options */}
      {selectedServices.videography && (
        <div className="p-4 border rounded-lg shadow space-y-4">
          <h3 className="font-semibold">Videography Options</h3>

          <div>
            <label className="block">Video Type</label>
            <select
              className="border rounded px-2 py-1"
              onChange={(e) =>
                handleChange("videography", "videoType", e.target.value)
              }
            >
              <option value="standard">Standard</option>
              <option value="cinematic">Cinematic</option>
            </select>
          </div>

          <div>
            <label className="block">Video Quality</label>
            <select
              className="border rounded px-2 py-1"
              onChange={(e) =>
                handleChange("videography", "videoQuality", e.target.value)
              }
            >
              <option value="1080p">1080p</option>
              <option value="4k">4K</option>
            </select>
          </div>

          <div>
            <label className="block">Duration (Minutes)</label>
            <input
              type="number"
              defaultValue={formData.videography.durationMinutes}
              className="border rounded px-2 py-1 w-24"
              onChange={(e) =>
                handleChange(
                  "videography",
                  "durationMinutes",
                  Number(e.target.value)
                )
              }
            />
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow"
      >
        Submit
      </button>
    </div>
  );
}
