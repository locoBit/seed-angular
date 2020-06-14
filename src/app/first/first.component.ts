import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

    private name: string;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.name = params['name'];
        });
    }

}
