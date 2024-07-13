export interface Chart {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string | undefined;
    tension: number;
    pointRadius: number;
    settings: {
        showLegend?: boolean;
        showXAxis?: boolean;
        showYAxis?: boolean;
        maintainAspectRatio?: boolean;
        responsive?: boolean;
        width?: number;
        height?: number;
    };
}
