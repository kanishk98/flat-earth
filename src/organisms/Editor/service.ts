import axios from "axios";
import { convertNodes } from "./utils";

export async function getFlatEarthGraph() {
  try {
    const graph = await axios.get(
      // TODO: Replace later with go-supplied port later
      "http://localhost:8080/get-flat-earth-graph"
    );
    const nodes = convertNodes(graph.data);
    return nodes;
  } catch (err) {
    console.error("Failed to fetch TF graph", err);
    // TODO: Unify error handling methods
  }
}
