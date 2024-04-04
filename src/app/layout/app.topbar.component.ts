import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { MenuService } from './app.menu.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];
    @Input() minimal: boolean = false;

    scales: number[] = [12, 13, 14, 15, 16];
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public menuService: MenuService
    ) {
        this.layoutService.config.update((config) => ({
            ...config,
            ripple: true,
            theme: 'lara-dark-teal',
            colorScheme: 'dark',
        }));
    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }

    get colorScheme(): String {
        return this.layoutService.config().colorScheme;
    }

    changeTheme() {
        let theme: string = '';
        let colorScheme: string = '';
        //         'lara-light-teal', 'light'
        // 'lara-dark-teal', 'dark'
        if (this.colorScheme == 'dark') {
            colorScheme = 'light';
            theme = 'lara-light-teal';
        } else {
            colorScheme = 'dark';
            theme = 'lara-dark-teal';
        }
        this.layoutService.config.update((config) => ({
            ...config,
            ripple: true,
            theme: theme,
            colorScheme: colorScheme,
        }));
    }
}
