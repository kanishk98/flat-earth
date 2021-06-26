import axios from "axios";

export async function getFlatEarthGraph() {
  try {
    const graph = await axios.get(
      // TODO: Replace later with go-supplied port later
      "http://localhost:8080/get-flat-earth-graph"
    );
    return graph.data;
  } catch (err) {
    console.error("Failed to fetch TF graph", err);
    // TODO: Unify error handling methods
  }
}
