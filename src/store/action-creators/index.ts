import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';

const creators = {
   ...UserActionCreators,
   ...TodoActionCreators
};

export default creators;