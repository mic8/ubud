import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AlumniStore, CreateGraduate, GraduateDto, GraduateFormFactory } from '@ubud/domain/alumni';
import { Form, FormValue } from '@ubud/form';
import {
    AlumniInteractionStore,
    GraduateManageInteraction, GraduateManageInteractionChanged,
    GraduateManageInteractionRepository
} from '@ubud/interaction/alumni';
import { Subscriber } from '@ubud/sate';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'ubud-dashboard-create-page',
    templateUrl: './dashboard-create.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        GraduateFormFactory,
        GraduateManageInteractionRepository,
    ]
})
export class DashboardCreatePage implements OnInit, OnDestroy {
    public form: Form;
    
    public loading$: Observable<boolean | undefined | null>;
    public success$: Observable<string | undefined | null>;
    public error$: Observable<string | undefined | null>;
    
    public constructor(
        formFactory: GraduateFormFactory, // local
        private store: AlumniStore,
        private interactionRepo: GraduateManageInteractionRepository,
        private interactionStore: AlumniInteractionStore,
        private subscriber: Subscriber,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.form = formFactory.create();
        
        this.loading$ = this.interactionRepo.isProcess$();
        this.success$ = this.interactionRepo.getSuccess$();
        this.error$ = this.interactionRepo.getError$();
    }
    
    public handleSubmit(payload: FormValue<GraduateDto>): void {
        if ('VALID' === payload.status) {
            this.store.dispatch(new CreateGraduate({
                payload: payload.data,
            }));
        }
    }
    
    public handleReset(): void {
        this.interactionStore.dispatch(new GraduateManageInteractionChanged({
            changes: {
                process: undefined,
                success: undefined,
                error: undefined,
                interaction: GraduateManageInteraction.IDLE,
                response: undefined,
            }
        }));
    }
    
    public ngOnInit(): void {
        this.subscriber.subscribe(
            this,
            this.interactionRepo.getInteraction$().pipe(
                tap(interaction => {
                    if (interaction === GraduateManageInteraction.CREATE_SUCCEED) {
                        setTimeout(() => {
                            this.handleReset();
                            this.router.navigate(['../'], {
                                relativeTo: this.route,
                            });
                        }, 2000);
                    }
                }),
            ),
        );
    }
    
    public ngOnDestroy(): void {
        this.handleReset();
        
        this.subscriber.flush(this);
    }
}
