import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";
import { Firestore, collection, collectionData, getDocs } from '@angular/fire/firestore';
import { inject } from "@angular/core";

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    availableExercises: Exercise[] = [
    ]

    private runningExercise: Exercise
    private exercises: Exercise[] = []
    private allDocs:any[]=[];

    private db = inject(Firestore)

    fetchAvailableExercises() {
        return this.availableExercises.slice();
    }

    startExercise(selectedId: String) {
        const selectedExercise = this.availableExercises.find(ex => ex.id === selectedId)
        this.runningExercise = selectedExercise;
        this.exerciseChanged.next({...this.runningExercise})
    }

    completeExercise() {
        this.exercises.push({
            ...this.runningExercise,
            date: new Date(),
            state: 'completed'
        })
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.exercises.push({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100),
            date: new Date(),
            state: 'cancelled'
        })
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    getRunningExercise() {
        return {...this.runningExercise}
    }

    getCompletedOrCancelledExercises() {
        return this.exercises.slice();
    }
}