import { Vector2 } from './Vector2';
export type InputAction = 'up' | 'down' | 'left' | 'right' | 'shoot' | 'bomb' | 'slow' | 'pause' | 'skip' | 'debug' | 'debug-collision';
export interface InputSnapshot {
    actions: InputAction[];
    pointerPos: Vector2;
    isDragging: boolean;
}
export interface KeyBindings {
    [action: string]: string[];
}
export declare const DEFAULT_KEY_BINDINGS: Record<InputAction, string[]>;
/**
 * Gamepad mapping for one action, using the W3C standard gamepad layout:
 * buttons 0=A,1=B,2=X,3=Y,4..7=shoulders/triggers,9=Start,12..15=D-pad U/D/L/R;
 * axes 0=x(-left/+right), 1=y(-up/+down).
 */
export interface GamepadActionBinding {
    /** Standard button indices that trigger this action. */
    buttons?: number[];
    /** Axis triggers: fire when `axes[index]` exceeds `threshold` toward `direction`. */
    axes?: {
        index: number;
        direction: -1 | 1;
    }[];
    /** Axis magnitude needed to count as pressed (default 0.5). */
    threshold?: number;
}
/** Minimal structural view of a Gamepad so tests can feed fake states. */
export interface GamepadLike {
    buttons: readonly {
        pressed: boolean;
    }[];
    axes: readonly number[];
}
export declare const DEFAULT_GAMEPAD_BINDINGS: Partial<Record<InputAction, GamepadActionBinding>>;
export declare class InputSystem {
    private bindings;
    private gamepadBindings;
    private gamepadProvider?;
    private rawKeysDown;
    /** Codes pressed but never sampled as held (quick taps), expiring after PRESS_BUFFER_FRAMES. */
    private pressBuffer;
    /** Actions whose buffered tap is being reported as a press this frame. */
    private bufferedPresses;
    private frame;
    private currentFrameDown;
    private prevFrameDown;
    private boundKeyDownHandler?;
    private boundKeyUpHandler?;
    private boundPointerDownHandler?;
    private boundPointerMoveHandler?;
    private boundPointerUpHandler?;
    private boundPointerEnterHandler?;
    private boundPointerLeaveHandler?;
    /** True while a touch/pointer is dragging the player ship. */
    isDragging: boolean;
    /**
     * Opt-in mouse steering (US: 鼠标操作可通过选项开启). When enabled the ship
     * tracks the cursor without holding a button; when disabled only touch drag
     * steers, which is the default so desktop keyboard play is never hijacked.
     */
    mouseControl: boolean;
    /** True while the cursor is over the game element (only meaningful with mouseControl). */
    pointerInside: boolean;
    /** Pointer position in game coordinates (canvas-local, CSS-scale corrected). */
    pointerPos: Vector2;
    /** Element used to map screen pointer coords -> canvas coords. */
    private attachTarget?;
    /** Game resolution — needed to undo the CSS scaling of the canvas (US#9). */
    private gameSize?;
    constructor(bindings?: Record<InputAction, string[]>, gamepadBindings?: Partial<Record<InputAction, GamepadActionBinding>>);
    /**
     * Enable gamepad polling. By default reads `navigator.getGamepads()` each
     * `update()`; pass a provider to inject states (e.g. in tests).
     */
    enableGamepad(provider?: () => (GamepadLike | null | undefined)[]): void;
    /** Rebind a keyboard action at runtime (e.g. from a settings menu). */
    setKeyBinding(action: InputAction, codes: string[]): void;
    /** Rebind a gamepad action at runtime. */
    setGamepadBinding(action: InputAction, binding: GamepadActionBinding | undefined): void;
    /** Current keyboard bindings (deep copy) — for rendering a settings screen. */
    getBindings(): Record<InputAction, string[]>;
    /** Safe viewport reference (undefined outside browsers, e.g. Vitest). */
    private get viewport();
    /**
     * 绑定输入监听。
     * - 传 `HTMLElement`（推荐：游戏容器/canvas）：键盘监听在 window 上生效，
     *   pointer/touch 拖动以该元素为坐标基准并启用。
     * - 传 `window` 或省略：仅键盘监听（兼容旧 API `attach(window)`）。
     * - `gameSize`：游戏内部分辨率（默认 640×480）。canvas 被 CSS 缩放时，
     *   指针坐标会按 rect/gameSize 比例换算回游戏坐标（US#9）。
     */
    attach(target?: Window | HTMLElement, gameSize?: {
        width: number;
        height: number;
    }): void;
    /**
     * 解绑输入监听。参数保留仅为兼容旧 API `detach(window)`。
     */
    detach(_target?: Window | HTMLElement): void;
    /** Simulate a key press (sampled by the next update() call, like real keydown events). */
    simulateKeyDown(code: string): void;
    simulateKeyUp(code: string): void;
    /** Begin a drag at the given viewport coordinates. */
    pointerDown(clientX: number, clientY: number): void;
    /** Toggle cursor steering on/off (driven by the in-game options menu). */
    setMouseControl(enabled: boolean): void;
    pointerMove(clientX: number, clientY: number): void;
    pointerUp(): void;
    /** True when a pointer device (touch drag or opt-in mouse) is steering the ship. */
    get isSteering(): boolean;
    /** Current steering target in game coordinates, or null when no pointer is driving. */
    getPointerTarget(): Vector2 | null;
    private refreshCurrentActions;
    /**
     * Sample connected gamepads (via `navigator.getGamepads()` or an injected
     * provider) and merge pressed actions into the current frame state.
     * No-op when no provider is available (e.g. Node, or gamepad unsupported).
     */
    pollGamepad(): void;
    private isGamepadActionPressed;
    update(): void;
    isKeyDown(action: InputAction): boolean;
    /** Currently-held actions (keyboard or gamepad) — for real-time input display. */
    getActiveActions(): InputAction[];
    getSnapshot(): InputSnapshot;
    applySnapshot(snapshot: InputSnapshot): void;
    wasKeyPressed(action: InputAction): boolean;
    wasKeyReleased(action: InputAction): boolean;
    getMovementVector(): Vector2;
    /**
     * The four direction actions as the bit set `core/Movement` resolves.
     *
     * `getMovementVector` cancels opposite keys, which is the right answer for an
     * analogue stick and the wrong one for a keyboard: a player pinched against a
     * wall holds both horizontals, and a game that reads a grid wants a decision,
     * not a zero. This keeps the four keys visible.
     */
    get movementBits(): number;
}
//# sourceMappingURL=InputSystem.d.ts.map