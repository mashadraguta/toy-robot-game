import { makeStyles } from "@mui/styles";
import { NR_COLUMNS, NR_ROWS } from "../consts";

export const DIRECTIONS = {
  north: "NORTH",
  south: "SOUTH",
  east: "EAST",
  west: "WEST",
};

export const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: `repeat(${NR_COLUMNS}, 150px)`,
    gridTemplateRows: `repeat(${NR_ROWS}, 150px)`,
    direction: "rtl",
    justifyContent: "center",
  },

  wrapper: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },

  gridItem: {
    backgroundColor: "lightsalmon",
    border: "2px solid black",
    width: "100px",
    height: "100px",
    textAlign: "center",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop:'100px',
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  robot: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    transform: ({ directionU }: any) => {
      switch (directionU) {
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

// rotate:  ({ directionU }: any) => (directionU === "NORTH" ? "90deg" : ""),
// rotate: (() => {
//   switch (DIRECTIONS) {
//     //@ts-ignore
//     case "NORTH":
//       return "90deg";
//     //@ts-ignore
//     case "SOUTH":
//       return "180deg";
//     //@ts-ignore
//     case "EAST":
//       return "270deg";
//     //@ts-ignore
//     case "WEST":
//       return "360deg";
//     default:
//       return "0";
//   }
// })(),
