import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class TransitionCounterService {
    activeToInactiveCount: number = 0;
    inActiveToActiveCount: number = 0;
    public inActiveToActiveEventType = 1;
    public activeToInactiveEventType = 2;

    @Output() transitionEvent = new EventEmitter<number>();

    incrementInactiveToActive() {
        this.inActiveToActiveCount++;
    }
    incrementActiveToInactive() {
        this.activeToInactiveCount++;
    }
}
