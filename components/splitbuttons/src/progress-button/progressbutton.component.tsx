import * as React from 'react';
import { ProgressButton, ProgressButtonModel } from '@syncfusion/ej2-splitbuttons';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `ProgressButtonComponent` represents the react ProgressButton Component.
 * ```ts
 * <ProgressButtonComponent content='Progress Button'></ProgressButtonComponent>
 * ```
 */
export class ProgressButtonComponent extends ProgressButton {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ProgressButtonModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ProgressButtonModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('button', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(ProgressButtonComponent, [ComponentBase, React.PureComponent]);
