/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoPage } from './view/pages/todo.page';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
const routes: Routes = [
    {
        path: '',
        component: TodoPage,
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
