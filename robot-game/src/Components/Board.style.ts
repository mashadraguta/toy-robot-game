import { makeStyles } from "@mui/styles";

export const DIRECTIONS = {
  north: "NORTH",
  south: "SOUTH",
  east: "EAST",
  west: "WEST",
};
export interface StyleProps {
  stateDirection: string;
  boardDimension?: number;
}
export const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: ({ boardDimension }) =>
      `repeat(${boardDimension}, 100px)`,
    gridTemplateRows: ({ boardDimension }) =>
      `repeat(${boardDimension}, 100px)`,
    direction: "rtl",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gridItem: {
    backgroundColor: "#5F9EA0",
    border: "2px solid black",
    width: "100px",
    height: "100px",
    textAlign: "center",
  },
  flexMain: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
  },
  flexControls: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  filled: {
    backgroundColor: "black",
  },
  robot: {
    width: "70px",
    height: "70px",
    transform: ({ stateDirection }: StyleProps) => {
      switch (stateDirection) {
        case DIRECTIONS.north:
          return "rotate(180deg)";
        case DIRECTIONS.south:
          return "rotate(0deg)";
        case DIRECTIONS.east:
          return "rotate(270deg)";
        case DIRECTIONS.west:
          return "rotate(90deg)";
        default:
          return "rotate(0deg)";
      }
    },
  },
}));
