import { ReactElement } from "react";

interface Node {
  id: string;
  type: string;
  data: { label: ReactElement };
  position: { x: number; y: number };
}

interface Edge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
}

interface FlatEarthNode {
  Mode: number;
  Name: string;
  Type: string;
  Config: FlatEarthNodeConfig;
}

interface FlatEarthNodeConfig {
  Attributes: FlatEarthNodeConfigAttributes;
}
