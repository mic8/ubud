interface GraduateState {
    index: {
        process: boolean | undefined | null;
        error: string | undefined | null;
        success: string | undefined | null;
    };
}

export interface AlumniInteractionState { // database
    graduate: GraduateState;
}
