import { EventEmitter } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class PieChartComponent extends BaseChartComponent {
    labels: boolean;
    legend: boolean;
    explodeSlices: boolean;
    doughnut: boolean;
    gradient: boolean;
    activeEntries: any[];
    select: EventEmitter<{}>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    translation: string;
    outerRadius: number;
    innerRadius: number;
    data: any;
    colors: ColorHelper;
    domain: any;
    dims: any;
    margin: number[];
    legendOptions: any;
    update(): void;
    getDomain(): any[];
    onClick(data: any): void;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        domain: any;
        colors: ColorHelper;
    };
    onActivate(item: any): void;
    onDeactivate(item: any): void;
}
