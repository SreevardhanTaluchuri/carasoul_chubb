import {Component , Input,EventEmitter,Output} from '@angular/core';

@Component({
    selector : 'c-card',
    templateUrl : './card.component.html',
    styleUrls : ['./card.component.css']
})
export class CardComponent{
    @Input() url = "";
    @Output() imageChange : EventEmitter<string> = new EventEmitter<string>();
    @Input() length = 0;

    changeImage(sign : string){
        this.imageChange.emit(sign);
    }

    changeImageOnButtonClick(num : number){
        this.imageChange.emit(num.toString());
    }
}