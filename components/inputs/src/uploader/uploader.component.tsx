import * as React from 'react';
import { Uploader, UploaderModel } from '@syncfusion/ej2-inputs';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface UploaderTypecast {
    template?: string | Function;
}
/**
 * Represents the React Uploader Component
 * ```html
 * <UploaderComponent></UploaderComponent>
 * ```
 */
export class UploaderComponent extends Uploader {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<UploaderModel & DefaultHtmlAttributes| UploaderTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'files': 'uploadedFiles'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<UploaderModel & DefaultHtmlAttributes| UploaderTypecast>;
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
            return React.createElement('input', this.getDefaultAttributes());
        }

    }
}

applyMixins(UploaderComponent, [ComponentBase, React.PureComponent]);
