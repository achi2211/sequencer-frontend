/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_ISEVEN = 'boilerplate/App/LOAD_ISEVEN';
export const LOAD_ISEVEN_SUCCESS = 'boilerplate/App/LOAD_ISEVEN_SUCCESS';
export const LOAD_ISEVEN_ERROR = 'boilerplate/App/LOAD_ISEVEN_ERROR';

export const LOAD_SEQUENCER = 'boilerplate/App/LOAD_SEQUENCER';
export const LOAD_SEQUENCER_SUCCESS = 'boilerplate/App/LOAD_SEQUENCER_SUCCESS';
export const LOAD_SEQUENCER_ERROR = 'boilerplate/App/LOAD_SEQUENCER_ERROR';

export const DEFAULT_LOCALE = 'en';
