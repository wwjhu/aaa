// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MetadataActions {
    export class Load {
        constructor(public id: string) {}
        static readonly type = '[UI] Load metadata';
    }
}
