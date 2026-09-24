/**
 * Parser for Touhou 8 .std stage background scripts.
 *
 * RawStageHeader: i16 nbObjects; i16 nbFaces; i32 facesOffset; i32 scriptOffset;
 *   i32 unkC; char stageName[128]; char songNames[4][128]; char songPaths[4][128];
 * Total = 0x490.
 *
 * After the header: nbObjects * RawStageObject, then faces, then the camera script.
 */
export interface StdObject {
    id: number;
    zLevel: number;
    flags: number;
    position: [number, number, number];
    size: [number, number, number];
    quads: StdQuad[];
}
export interface StdQuad {
    type: number;
    anmScript: number;
    vmIdx: number;
    position: [number, number, number];
    size: [number, number];
}
export interface StdInstruction {
    frame: number;
    opcode: number;
    args: number[];
}
export interface StdFile {
    stageName: string;
    songNames: string[];
    songPaths: string[];
    objects: StdObject[];
    script: StdInstruction[];
}
export declare function parseStd(buf: Buffer | Uint8Array): StdFile;
//# sourceMappingURL=StdFile.d.ts.map