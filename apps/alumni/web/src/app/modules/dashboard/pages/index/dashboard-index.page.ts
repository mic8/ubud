import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AlumniStore, FetchGraduates, Graduate, GraduateRepository } from '@ubud/domain/alumni';
import { Observable } from 'rxjs';
import { GraduateIndexInteractionRepository } from '@ubud/interaction/alumni';

@Component({
    selector: 'ubud-dashboard-index-page',
    templateUrl: './dashboard-index.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        GraduateRepository,
        GraduateIndexInteractionRepository,
    ]
})
export class DashboardIndexPage implements OnInit, OnDestroy {
    public graduates$: Observable<Graduate[] | undefined | null>; // data yang dibinding dari state
    public loading$: Observable<boolean | undefined | null>;
    
    public constructor(
        private store: AlumniStore,
        private repo: GraduateRepository,
        private interactionRepo: GraduateIndexInteractionRepository,
    ) {
        this.graduates$ = this.repo.getGraduates$();
        this.loading$ = this.interactionRepo.isProcess$();
    }
    
    public ngOnInit(): void {
        this.store.dispatch(new FetchGraduates());
    }
    
    public ngOnDestroy(): void {
    }
}
