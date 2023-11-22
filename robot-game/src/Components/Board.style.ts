import { makeStyles } from "@mui/styles";


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
    gridTemplateColumns:({boardDimension})=> `repeat(${boardDimension}, 100px)`,
    gridTemplateRows:({boardDimension})=> `repeat(${boardDimension}, 100px)`,
    direction: "rtl",
    justifyContent: "center",
  },

  wrapper: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  gridItem: {
    backgroundColor: "lightsalmon",
    border: "2px solid black",
    width: "100px",
    height: "100px",
    textAlign: "center",
  },
  flexMain: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "100px",
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
    borderRadius: "50%",
    backgroundColor: "transparent",
    transform: ({ stateDirection }: any) => {
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


