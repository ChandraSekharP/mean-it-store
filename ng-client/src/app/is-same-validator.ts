
import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  /**
   * Match two controls if they are the same
   * @param firstControlName
   * @param secondControlName
   * @returns {(AC: AbstractControl) => any}
   * @constructor
   */
  static Match(firstControlName, secondControlName) {
    return (AC: AbstractControl) => {
      let firstControlValue = AC.get(firstControlName).value; // to get value in input tag
      let secondControlValue = AC.get(secondControlName).value; // to get value in input tag
      if (firstControlValue != secondControlValue) {
        AC.get(secondControlName).setErrors({MatchFields: true});
        console.log(false);
      } else {
        console.log(true);
        return null
      }
    };
  }
}

/* import {FormControl} from '@angular/forms';

export function isSameValidator (otherControlName: string) {

  let sourceControl: FormControl;
  let otherControl: FormControl;

  return function matchFormControls (control: FormControl) {

    if (!control.parent) {
      return null;
    }

    if (!sourceControl) {
      sourceControl = control;
      otherControl = control.parent.get(otherControlName) as FormControl;
      if (!otherControl) {
        throw new Error('isSameValidator(): Other Control is not found');
      }
      otherControl.valueChanges.subscribe(() => {
        sourceControl.updateValueAndValidity();
      });
    }

    if (!otherControl) {
      return null;
    }

    if (otherControl.value !== sourceControl.value) {
      return {
        matchOther: true
      };
    }

    return null;

  }

} */
