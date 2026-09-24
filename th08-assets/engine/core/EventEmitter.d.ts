type Listener<T = any> = (payload: T) => void;
/**
 * emit() argument list for a payload type.
 * `void` events keep an optional payload so legacy call sites (`emit('destroy', this)`)
 * stay valid without widening the declared event type.
 */
type EventArgs<T> = T extends void ? [payload?: any] : [payload: T];
/**
 * Minimal typed pub/sub. `EventMap` maps event name -> payload type; the default
 * (fully open) map keeps untyped usage source-compatible.
 */
export declare class EventEmitter<EventMap extends Record<string, unknown> = Record<string, unknown>> {
    private events;
    on<K extends keyof EventMap & string>(event: K, listener: Listener<EventMap[K]>): () => void;
    /** Subscribe for the next emission only; auto-unsubscribes before invoking the listener. */
    once<K extends keyof EventMap & string>(event: K, listener: Listener<EventMap[K]>): () => void;
    off<K extends keyof EventMap & string>(event: K, listener: Listener<EventMap[K]>): void;
    emit<K extends keyof EventMap & string>(event: K, ...args: EventArgs<EventMap[K]>): void;
    removeAllListeners(): void;
}
export {};
//# sourceMappingURL=EventEmitter.d.ts.map