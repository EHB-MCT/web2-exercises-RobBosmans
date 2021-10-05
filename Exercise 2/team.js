class Team {
    constructor(){
        this.teamName = 'Example teamname';
        this.trainer = 'Example trainername';
        this.roster = [];
    }
    describe(){
        return `Team ${this.teamName} with trainer ${this.trainer} has the following pokemon: ${[...this.roster]}`;
    }
}

export default Team;