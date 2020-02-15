import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../shared/users.service';
import { TransitionCounterService } from '../shared/transitionCounter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.userService.inactiveUsers;

  constructor(private userService: UserService,
    private counterService: TransitionCounterService) { }

  onSetToActive(id: number) {
    this.userService.setActive(id);
    this.counterService.transitionEvent.emit(this.counterService.inActiveToActiveEventType);
  }

}
