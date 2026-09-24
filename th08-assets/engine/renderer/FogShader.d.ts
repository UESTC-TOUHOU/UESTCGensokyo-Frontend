/**
 * Hardware fog for the backdrop's mesh layer, as a self-supplied shader bit.
 *
 * The original renders its backdrop through fixed-function Direct3D 8 and sets
 * `D3DRS_FOGSTART` / `D3DRS_FOGEND` / `D3DRS_FOGCOLOR` (`Background.cpp:833-839`)
 * while leaving `D3DRS_FOGVERTEXMODE` and `D3DRS_FOGPIXELMODE` at their defaults.
 * That combination means three things, and each is a place where a cheap
 * approximation visibly disagrees:
 *
 * 1. the ramp is measured along **camera-space depth**, not distance to the eye;
 * 2. it is evaluated **per pixel**, from a depth the rasteriser interpolates
 *    across the face - so one big ground sheet carries the whole gradient;
 * 3. fog mixes the shaded **colour toward the fog colour** and leaves the
 *    fragment's alpha alone. It is not a dissolve into the background.
 *
 * Point 3 is the expensive one to fake from outside a shader. Laying a flat
 * fog-coloured quad under each slice was tried and reverted: the underlay has no
 * way to know the texel's alpha, so it paints fog into the transparent holes of
 * every sheet and the backdrop comes back as grey rectangles with hard quad
 * edges. Re-drawing the *same* geometry tinted was considered and dropped for a
 * subtler reason - a tint multiplies the texel, so the fog colour would arrive
 * shaded by the scenery it is supposed to replace. Point at the fragment instead
 * and the mix is exact, which is what this bit does - together with 1 and 2, by
 * taking a per-vertex depth and letting the rasteriser interpolate it.
 *
 * Pixi's stock mesh shader has neither a fog term nor a vertex-colour channel, so
 * the bit is supplied here in both languages: WGSL for the WebGPU renderer and
 * GLSL for the WebGL one. `compileHighShader*Program` assembles them around the
 * same template the built-in mesh shader uses, so the texture sample, the local
 * transform and the pixel rounding still come from Pixi's own bits. The fog is
 * applied last, which is why `createFogMeshShader` appends this bit rather than
 * leading with it: the bits write into one `outColor` in list order.
 */
import { Shader, UniformGroup } from 'pixi.js';
import type { Texture } from 'pixi.js';
/** The geometry attribute this bit reads: view-space depth, one per vertex. */
export declare const FOG_DEPTH_ATTRIBUTE = "aFogDepth";
/** One frame's `D3DRS_FOGCOLOR` plus the linear ramp, in backdrop world units. */
export interface FogRamp {
    /** `D3DRS_FOGCOLOR` as 0xRRGGBB. */
    color: number;
    /** `D3DRS_FOGSTART`. */
    near: number;
    /** `D3DRS_FOGEND`. */
    far: number;
}
/** WGSL half of the fog bit, for the WebGPU renderer. */
export declare const fogBit: {
    name: string;
    vertex: {
        header: string;
        main: string;
    };
    fragment: {
        header: string;
        main: string;
    };
};
/** GLSL half of the fog bit, for the WebGL renderer. */
export declare const fogBitGl: {
    name: string;
    vertex: {
        header: string;
        main: string;
    };
    fragment: {
        header: string;
        main: string;
    };
};
/** The two `vec4`s, typed the way `UniformGroup` wants its structures. */
interface FogUniformStructures {
    [key: string]: {
        value: Float32Array;
        type: 'vec4<f32>';
    };
    uFogColor: {
        value: Float32Array;
        type: 'vec4<f32>';
    };
    uFogRange: {
        value: Float32Array;
        type: 'vec4<f32>';
    };
}
/** So callers read `uniforms.uniforms.uFogColor` as a typed array, not an `any`. */
export type FogUniforms = UniformGroup<FogUniformStructures>;
/**
 * The fog uniforms, shared by reference across every fogged bucket so one
 * `applyFog` per frame reaches the whole backdrop.
 *
 * Left non-static: the group holds two `vec4`s, and letting Pixi sync it on
 * demand keeps this on the same code path as its own mesh uniforms.
 */
export declare function createFogUniforms(): FogUniforms;
/** Publish this frame's fog. Pass `null` to leave the fragments as authored. */
export declare function applyFog(uniforms: FogUniforms, ramp: FogRamp | null): void;
/**
 * The fogged mesh shader, built once per sprite page.
 *
 * One shader per bucket rather than one shared shader, because the texture bind
 * group travels inside the shader and each bucket samples a different page. With
 * a custom shader attached Pixi stops batching the mesh - `Mesh.batched` is false
 * the moment `_shader` is set - and routes it through its native mesh pipeline,
 * which is what lets `aFogDepth` be a real geometry attribute.
 */
export declare function createFogMeshShader(texture: Texture, fog: FogUniforms): Shader;
export {};
//# sourceMappingURL=FogShader.d.ts.map