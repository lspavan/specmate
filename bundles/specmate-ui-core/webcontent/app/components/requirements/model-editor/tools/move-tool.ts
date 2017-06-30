import { ITool } from './i-tool';
import { CEGNode } from '../../../../model/CEGNode';
import { CEGConnection } from '../../../../model/CEGConnection';

export class MoveTool implements ITool<CEGNode | CEGConnection> {
    name: string = 'Select';
    icon: string = 'arrows';
    color: string = 'primary';
    cursor: string = 'move';
    selectedElements: (CEGNode | CEGConnection)[] = [];
    done: boolean = false;

    constructor() { }

    activate(): void {
        this.selectedElements = [];
    }

    deactivate(): void {
        this.selectedElements = [];
    }

    click(event: MouseEvent): Promise<void> { 
        return Promise.resolve();
    }

    select(element: CEGNode | CEGConnection): Promise<void> {
        this.selectedElements[0] = element;
        return Promise.resolve();
    }
}
