'use client';

import { IFilm, IStarShip } from '@/types';
import { createFilmEdges, createStarshipEdges } from '@/utils/edges';
import { createFilmNodes, createStarshipNodes } from '@/utils/nodes';
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface GraphFlowProps {
  name: string;
  heroFilms: IFilm[];
  heroStarships: IStarShip[];
  heroId: number;
}

export default function GraphFlow({ name, heroFilms, heroStarships, heroId }: GraphFlowProps) {
  const filmNodes = createFilmNodes(heroFilms, heroId, name);
  const starshipNodes = createStarshipNodes(heroStarships);

  const initialNodes = [...filmNodes, ...starshipNodes];

  const filmEdges = createFilmEdges(heroFilms, heroId);
  const starshipEdges = createStarshipEdges(heroFilms, heroStarships);

  const initialEdges = [...filmEdges, ...starshipEdges];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
