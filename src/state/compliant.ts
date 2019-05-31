import { State, ReadonlyState } from './codec';
import { hasDuplicate } from './has-duplicate';

export function isSpecCompliantState(state: unknown): state is ReadonlyState {
    if (!State.is(state)) {
        return false;
    }

    const alivePieces = [
        ...state.ele[0],
        ...state.ele[1],
        ...state.ele[2],
        ...state.ele[3],
        ...state.ele[4],
        ...state.ele[5],
        ...state.ele[6],
    ];

    if (hasDuplicate([
        ...state.arxe.txifol,
        ...state.sorn.txifol,
        state.arxe.evol,
        state.sorn.evol,
        ...alivePieces,
    ].filter((x): boolean => x !== null))) {
        return false;
    }

    if (!state.korol.every((x): boolean => alivePieces.indexOf(x) !== -1)) {
        return false;
    }

    return true;
}
