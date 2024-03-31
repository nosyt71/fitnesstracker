import { Component, inject } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {

  private trainingService = inject(TrainingService)

  onGoingTraining = false;
  exerciseSubscription: Subscription;

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(exercise => {
      if(exercise) {
        this.onGoingTraining = true;
      } else {
        this.onGoingTraining = false;
      }
    })
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }
}
