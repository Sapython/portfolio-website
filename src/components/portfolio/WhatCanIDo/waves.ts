/**
 * Generates a random wave SVG element.
 * @param {number} numPoints - The number of points to generate for the wave.
 * @returns {SVGElement} - The generated SVG wave element.
 */
export function generateRandomWave(numPoints: number,min:number = 2,max:number = 15,height:number =200,width:number=1000): string {
    const maxFrequency: number = max;
    const minFrequency: number = min;

    let d: string = `M 0 ${height}`; // Start from the left side with y = height

    const points: { x: number, y: number }[] = [];
    for (let x: number = 0; x <= width; x += width / numPoints) { // Adjusting points based on numPoints, iterate from left to right
        if (x === 0) {
            points.push({ x, y: height }); // Add the first point at the bottom left corner
            continue;
        } else if (x === width) {
            points.push({ x, y: height }); // Add the last point at the bottom right corner
            continue;
        }
        const frequency: number = Math.floor(Math.random() * (maxFrequency - 2 + 1)) + minFrequency; // Random frequency between 2 to 15
        const amplitude: number = Math.random() * height / 2;
        const y: number = height / 2 + amplitude * Math.sin((x / width) * frequency * Math.PI * 2);
        points.push({ x, y });
    }

    // Add quadratic bezier curves to smooth out the path
    for (let i: number = 0; i < points.length - 1; i++) {
        const xc: number = (points[i].x + points[i + 1].x) / 2; // Calculate the x-coordinate of the control point
        const yc: number = (points[i].y + points[i + 1].y) / 2; // Calculate the y-coordinate of the control point
        d += ` Q ${points[i].x} ${points[i].y} ${xc} ${yc}`; // Add the quadratic bezier curve command to the path
    }

    d += ` L ${width} ${height} L 0 ${height} Z`; // Add lines to close the path, end on the right side

    return d;
}

export function generateRandomWaveSmooth(numPoints: number, min: number = 2, max: number = 15, height: number = 200, width: number = 1000): string {
    const maxFrequency: number = max;
    const minFrequency: number = min;

    let d: string = `M 0 ${height / 2}`; // Start from the left side with y = height / 2

    const points: { x: number, y: number }[] = [];
    for (let x: number = 0; x <= width; x += width / numPoints) {
        const frequency: number = Math.floor(Math.random() * (maxFrequency - 2 + 1)) + minFrequency; // Random frequency between min and max
        const amplitude: number = Math.random() * height / 2;
        const y: number = height / 2 + amplitude * Math.sin((x / width) * frequency * Math.PI * 2);
        points.push({ x, y });
    }

    // Add cubic bezier curves to smooth out the path
    for (let i: number = 0; i < points.length - 1; i++) {
        const cp1x: number = points[i].x + (points[i + 1].x - points[i].x) / 3;
        const cp1y: number = points[i].y + (points[i + 1].y - points[i].y) / 3;
        const cp2x: number = points[i + 1].x - (points[i + 1].x - points[i].x) / 3;
        const cp2y: number = points[i + 1].y - (points[i + 1].y - points[i].y) / 3;
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${points[i + 1].x} ${points[i + 1].y}`;
    }

    return d;
}

export function generateRandomWavePoints(numPoints:number, min = 2, max = 15, height = 200, width = 1000) {
    const maxFrequency = max;
    const minFrequency = min;

    let points = [{ x: 0, y: height }];

    for (let x = 0; x <= width; x += width / numPoints) {
        const frequency = Math.floor(Math.random() * (maxFrequency - minFrequency + 1)) + minFrequency;
        const amplitude = Math.random() * height / 2;
        const y = height / 2 + amplitude * Math.sin((x / width) * frequency * Math.PI * 2);
        points.push({ x, y });
    }

    points.push({ x: width, y: height });
    points.push({ x: 0, y: height });

    return points;
}
