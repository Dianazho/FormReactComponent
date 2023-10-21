// For age slider component
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Age({ onSetAge }) {
  return (
    <div>
      <Box sx={{ width: 350 }}>
        <label htmlFor="age" className="flex mb-2">
          Age
        </label>
        <div className="flex justify-between p-1">
          <span>8</span>
          <span>100</span>
        </div>
        <Slider
          aria-label="Always visible"
          defaultValue={30}
          step={1}
          min={8}
          valueLabelDisplay="on"
          sx={{
            color: "#7221d7",
            "& .MuiSlider-valueLabel": {
              background: "white",
              color: "#7221d7",
              borderRadius: "4px",
              border: "2px solid #ccb4e4",
            },
          }}
          onChange={(e) => onSetAge(e.target.value)}
        />
      </Box>
    </div>
  );
}
