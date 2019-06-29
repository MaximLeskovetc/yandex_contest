/*
*
* @example
*   const graph = [
*       [1, 2],
*       [0, 3],
*       [0, 4],
*       [1, 5],
*       [2, 6],
*       [3, 7],
*       [4, 9],
*       [5, 8],
*       [7, 9],
*       [1, 2]
*   ];
*
*   const markedVertices = [0, 4, 5, 9];
*
*   findShortestMarkedPathLength(graph, markedVertices) // 6
*/


const findShortestMarkedPathLength = (graph, markedVertices) => {
    const buildPath = (parents) => {
        const result = [];
        while (parents[maxVert] !== null) {
            maxVert = parents[maxVert];
            result.push(maxVert);
        }
        return result.length;
    };
    const stack = [[0, 0]];
    const visited = [0];
    let maxVert = graph.reduce((acc, cur) => Math.max(...cur, acc), 0);
    let parents = [];
    parents = [null];
    while (stack.length) {
        const elem = stack.pop();
        const node = elem[0];
        const distance = elem[1];
        if (node === maxVert) {
            return buildPath(parents)
        }
        graph[node].forEach(vert => {
            if (vert && vert !== node && !visited.includes(vert)) {
                parents[vert] = node;
                if (distance <= 2 && markedVertices.includes(node)) {
                    stack.push([vert, 0]);
                    visited.push(vert);
                } else if (distance + 1 < 3) {
                    stack.push([vert, distance + 1]);
                    visited.push(vert);
                }
            }
        });
    }
    return null;
};

exports.findShortestMarkedPathLength = findShortestMarkedPathLength;