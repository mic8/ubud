import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCard } from './article.card';

@NgModule({
    declarations: [ // declare variablenya -> var a: ArticleCard;
        ArticleCard,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        ArticleCard, // reassign (mengisi variable) -> var a: ArticleCard = new ArticleCard();
    ],
})
export class UbudElementCommonArticleCardModule {}
