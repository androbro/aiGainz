export interface GroupedData {
    key: string;
    label: string;
    children: Array<{
        key: string;
        label: string;
        data: any;
    }>;
}

export interface CreateGroupedData {
    key: string;
    label: string;
    children: Array<{
        key: string;
        label: string;
        data: any;
    }>;
}