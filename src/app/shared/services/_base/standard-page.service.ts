// @ts-strict-ignore
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({
    providedIn: "root",
})
export class StandardPageService {

    constructor(
        private titleService: Title
    ){

    }

    setPageTitle(title: string){
        this.titleService.setTitle(title);
    }
}
