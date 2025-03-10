import { Slider } from "@mui/material";

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center w-full">
      <label htmlFor="speed" className="font-medium text-gray-700 whitespace-nowrap">
        Speed:
      </label>
      <Slider
        value={speed}
        min={100}
        max={1000}
        step={50}
        onChange={(e, newValue) => setSpeed(newValue)}
        sx={{ width: "100%", maxWidth: "200px", color: "blue" }}
      />
      <span className="text-sm text-gray-600">{speed}ms</span>
    </div>
  );
};

export default SpeedSlider;
