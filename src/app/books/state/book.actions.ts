import { createAction, props } from '@ngrx/store';
import { Result } from '../book.model';

export const toggleBookCoverVisibility = createAction(
  '[Book List Page] Toggle Book Cover Visibility'
);

export const loadBooks = createAction(
  '[Book] Load'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Success',
  props<{ result: Result }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Fail',
  props<{ error: string }>()
);
