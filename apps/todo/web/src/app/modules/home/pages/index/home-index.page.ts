import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TodoStore, FetchComments, Data, CommentRepository } from '@ubud/domain/todo';
import { Observable } from 'rxjs';
import { TodoIndexInteractionRepository } from '@ubud/interaction/todo';

@Component({
    selector: 'ubud-home-index-page',
    templateUrl: './home-index.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        CommentRepository,
        TodoIndexInteractionRepository
    ]
})
export class HomeIndexPages implements OnInit, OnDestroy {
    public comments$: Observable<Data[] | undefined | null>; // data yang dibinding dari state
    public loading$: Observable<boolean | undefined | null>;
    
    public constructor(
        private store: TodoStore,
        private repo: CommentRepository,
        private interactionRepo: TodoIndexInteractionRepository,
    ) {
        this.comments$ = this.repo.getDatas$();
        this.loading$ = this.interactionRepo.isProcess$();
    }
    
    public ngOnInit(): void {
        this.store.dispatch(new FetchComments());
    }
    
    public ngOnDestroy(): void {
    }
}
