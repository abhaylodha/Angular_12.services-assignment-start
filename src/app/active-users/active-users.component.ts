import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../shared/users.service';
import { TransitionCounterService } from '../shared/transitionCounter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent {
  users = this.userService.activeUsers;

  constructor(private userService: UserService,
    private counterService: TransitionCounterService) {
    this.counterService.transitionEvent.subscribe((n: number) => {
      switch (n) {
        case counterService.inActiveToActiveEventType: {
          this.counterService.incrementInactiveToActive();
          break;
        }
        case counterService.activeToInactiveEventType: {
          this.counterService.incrementActiveToInactive();
          break;
        }
      }
    })
  }

  onSetToInactive(id: number) {
    this.userService.setInactive(id);
  }
}
