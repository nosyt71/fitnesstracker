import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent {

  private trainingService = inject(TrainingService)
  private db: Firestore = inject(Firestore)

  exercises$: Observable<any[]>;

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnInit() {
    this.exercises$ = collectionData(collection(this.db, 'availableExercises'))
  }

}
