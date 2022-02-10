import { Injectable } from '@angular/core';
import { Action, createSelector, State, StateContext, StateToken } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { delay, of } from 'rxjs';
import { MetadataActions } from './metadata.actions';

interface Metadata {
    id: string;
    name: string;
}

export interface MetadataStateModel {
    metadata: { [id: string]: Metadata };
}

export const METADATA_STATE_TOKEN = new StateToken<MetadataStateModel>('metadata');

@State<MetadataStateModel>({
    name: METADATA_STATE_TOKEN,
    defaults: {
        metadata: {},
    },
})
@Injectable()
export class MetadataState {
    constructor() {}

    static metadata(id: string) {
        return createSelector([MetadataState], (state: MetadataStateModel) => {
            return state.metadata[id];
        });
    }

    @Action(MetadataActions.Load)
    add({ setState }: StateContext<MetadataStateModel>, { id }: MetadataActions.Load) {
        of({ id: id, name: `name ${id}` })
            .pipe(delay(2000))
            .subscribe((metadata) => {
                setState(patch({ metadata: patch({ [metadata.id]: metadata }) }));
            });
    }
}
