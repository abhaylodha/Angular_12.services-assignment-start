import { Injectable, Output, EventEmitter } from "@angular/core";
import { TransitionCounterService } from "./transitionCounter.service";

@Injectable({ providedIn: 'root' })

export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: TransitionCounterService) {}

    setInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }

    setActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

}
