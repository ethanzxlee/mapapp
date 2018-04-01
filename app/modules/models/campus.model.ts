import { Polygon } from 'geojson';

export interface Campus {
    id?: number;
    name: string;
    isPublished: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    pdfUrl: string;
    area: Polygon;
}
