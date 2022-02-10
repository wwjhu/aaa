import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { EosButtonModule } from '@woodwing/eos-ui-angular';
import { MetadataState } from '../store/metadata.state';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([MetadataState], {
            developmentMode: true,
            selectorOptions: {
                suppressErrors: false,
                injectContainerState: false,
            },
            compatibility: {
                strictContentSecurityPolicy: true,
            },
        }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        EosButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
