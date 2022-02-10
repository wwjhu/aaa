import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { MetadataActions } from '../store/metadata.actions';
import { MetadataState } from '../store/metadata.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private store: Store) {}

    values: unknown[] = [];
    metadata1$ = this.store.select(MetadataState.metadata('1'));

    ngOnInit() {
        this.metadata1$.subscribe((metadata) => this.values.push(JSON.stringify(metadata ?? String(metadata))));
        this.store.dispatch(new MetadataActions.Load('1'));
    }
}
