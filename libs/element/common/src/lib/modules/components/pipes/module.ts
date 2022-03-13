import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TruncatePipe } from "./truncate.pipe";
const PIPES: any[] = [
    TruncatePipe,
];

@NgModule({
    declarations:[...PIPES],
    imports: [ CommonModule ],
    exports: [...PIPES],
})

export class UbudElementCommonPipesComponentModule {}