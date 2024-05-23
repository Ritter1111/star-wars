'use client';

import { IFilm } from '@/types';
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
  heroId: number;
}

export default function GraphFlow({ name, heroFilms, heroId }: GraphFlowProps) {
  const filmNodes = heroFilms.map((film, idx) => {
    return {
      id: `film-${film.id}`,
      position: { x: idx * 250, y: 100 },
      data: { label: film.title },
    };
  });

  const initialNodes = [
    { id: `hero-${heroId}`, position: { x: 250, y: 0 }, data: { label: name } },
    ...filmNodes,
    // { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];

  const filmEdges = filmNodes.map((filmNode) => ({
    id: `film-edge${filmNode.id}`,
    source: `hero-${heroId}`,
    target: filmNode.id,
    animated: true,
  }));

  const initialEdges = [...filmEdges];

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
