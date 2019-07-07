"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sonicauroradownloadlinks {
    constructor() {
        this._command = "sonicauroradownloadlinks";
    }
    help() {
        return "The downloads of the versions of Sonic Aurora that could currently be found. RIP Aurora and Qunoxic";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`Oldest release that I could find so far: https://mega.nz/#!IPoxzRBR!qvxDUZV7ElKS-brdBcU3OD2jHsocidCWMgd4aNn1Kj0
But the latest release (and final): https://gamejolt.com/games/sonicaurora/362629`);
    }
}
exports.default = sonicauroradownloadlinks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uaWNhdXJvcmFkb3dubG9hZGxpbmtzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3NvbmljYXVyb3JhZG93bmxvYWRsaW5rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLHdCQUF3QjtJQUE3QztRQUVxQixhQUFRLEdBQUcsMEJBQTBCLENBQUE7SUFrQnRELENBQUM7SUFmRCxJQUFJO1FBRUEsT0FBTyxxR0FBcUcsQ0FBQztJQUNqSCxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7a0ZBQytDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0o7QUFwQkwsMkNBb0JLIn0=