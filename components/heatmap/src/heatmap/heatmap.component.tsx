import * as React from 'react';
import { HeatMap, HeatMapModel } from '@syncfusion/ej2-heatmap';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react HeatMap Component
 * ```tsx
 * <HeatMapComponent></HeatMapComponent>
 * ```
 */
export class HeatMapComponent extends HeatMap {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<HeatMapModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<HeatMapModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
        this.state = props;
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(HeatMapComponent, [ComponentBase, React.PureComponent]);
