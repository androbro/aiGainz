export interface Chart {
    id: number;
    label: string;
    fill: boolean;
    borderColor: string | undefined;
    tension: number;
    pointRadius: number;
    showLegend: boolean;
    showXAxis: boolean;
    showYAxis: boolean;
    maintainAspectRatio: boolean;
    responsive: boolean;
    width?: number;
    height?: number;
    dataPoints: ChartDataPoint[];
}

export interface ChartDataPoint {
    id: number;
    date: Date;
    score: number;
}
