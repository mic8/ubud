import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ubud-element-common-article-card-component',
    templateUrl: './article.card.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCard {
    @Input() public title!: string;
}
