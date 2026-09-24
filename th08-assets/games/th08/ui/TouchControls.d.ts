import { InputSystem } from '../../../engine/core/InputSystem';
/** Virtual action buttons for touch play, skinned with the baked ui:touch atlas. */
export type TouchAction = 'shoot' | 'bomb' | 'focus' | 'pause';
/**
 * On-screen buttons that feed InputSystem through the same code path as a
 * keyboard, so bindings, the 3-frame press buffer and replays all keep working.
 * Dragging the playfield still steers the ship (and auto-fires) — see US#9.
 */
export declare class TouchControls {
    private readonly root;
    private readonly input;
    private el?;
    private readonly held;
    private readonly disposers;
    constructor(root: HTMLElement, input: InputSystem);
    /** Show the pad; `auto` only mounts it on coarse-pointer (touch) devices. */
    show(mode?: 'always' | 'auto' | 'never'): void;
    hide(): void;
    private press;
    private release;
    static isTouch(): boolean;
}
//# sourceMappingURL=TouchControls.d.ts.map